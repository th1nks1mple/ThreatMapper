#!/bin/bash

trim() {
  local var="$*"
  # remove leading whitespace characters
  var="${var#"${var%%[![:space:]]*}"}"
  # remove trailing whitespace characters
  var="${var%"${var##*[![:space:]]}"}"
  echo -n "$var"
}

echoerr() { echo "$@" 1>&2; }

configure_cron() {
  #Setup cron jobs for misc tasks, it needs to be killed and restarted
  #doesnt work smoothly inside docker!
  sudo service cron start
  sudo chmod 600 /etc/logrotate.d/fenced_logrotate.conf
  (echo "*/5 * * * * /usr/sbin/logrotate /etc/logrotate.d/fenced_logrotate.conf") | sudo crontab -
}

launch_deepfenced() {
  # In k8s, if agent pod restarts these files are not cleared
  rm -rf $DF_INSTALL_DIR/var/log/fenced/* 2>/dev/null

  mkdir -p $DF_INSTALL_DIR/var/log/fenced/api $DF_INSTALL_DIR/var/log/fenced/cloud-resource-refresh-log \
    $DF_INSTALL_DIR/var/log/fenced/cloud-resources $DF_INSTALL_DIR/var/log/fenced/cloud-scanner \
    $DF_INSTALL_DIR/var/log/fenced/cloud-scanner-log $DF_INSTALL_DIR/var/log/fenced/status 2>/dev/null
  chown -R deepfence: $DF_INSTALL_DIR/var/log/fenced

  if [[ -z "${SCOPE_HOSTNAME}" ]]; then
    SCOPE_HOSTNAME="$(hostname)"
    export SCOPE_HOSTNAME="$SCOPE_HOSTNAME"
  fi

  configure_cron

  unlink /var/run/supervisor.sock 2>/dev/null
  /usr/bin/supervisord -c /home/deepfence/supervisord.conf

  echo "Starting cloud agent"
  until [[ "$(ls $DF_INSTALL_DIR/var/log/supervisor/deepfenced* 2>/dev/null | wc -w)" != "0" ]]; do
    sleep 5
  done
  tail -f $DF_INSTALL_DIR/var/log/supervisor/deepfenced*
}

main() {
  launch_deepfenced
}

main
