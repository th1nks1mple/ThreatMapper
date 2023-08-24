import { useSuspenseQuery } from '@suspensive/react-query';
import { Suspense } from 'react';
import { Card, IconButton, Step, StepIndicator, StepLine, Stepper } from 'ui-components';

import { useCopyToClipboardState } from '@/components/CopyToClipboard';
import { DFLink } from '@/components/DFLink';
import { CopyLineIcon } from '@/components/icons/common/CopyLine';
import { InfoIcon } from '@/components/icons/common/Info';
import { queries } from '@/queries';

const useGetApiToken = () => {
  return useSuspenseQuery({
    ...queries.auth.apiToken(),
  });
};
const PLACEHOLDER_API_KEY = '---DEEPFENCE-API-KEY--';

const Command = () => {
  const { copy, isCopied } = useCopyToClipboardState();
  const { status, data } = useGetApiToken();
  const apiToken = data?.apiToken?.api_token;
  const dfApiKey =
    status !== 'success'
      ? PLACEHOLDER_API_KEY
      : apiToken === undefined
      ? PLACEHOLDER_API_KEY
      : apiToken;

  const code = `docker run -dit \\
  --cpus=".2" \\
  --name=deepfence-agent \\
  --restart on-failure \\
  --pid=host \\
  --net=host \\
  --privileged=true \\
  -v /sys/kernel/debug:/sys/kernel/debug:rw \\
  -v /var/log/fenced \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v /:/fenced/mnt/host/:ro \\
  -e USER_DEFINED_TAGS="" \\
  -e MGMT_CONSOLE_URL="${window.location.host ?? '---CONSOLE-IP---'}" \\
  -e MGMT_CONSOLE_PORT="443" \\
  -e DEEPFENCE_KEY="${dfApiKey}" \\
  deepfenceio/deepfence_agent_ce:2.0.0`;
  return (
    <>
      <pre className="h-fit text-p7 dark:text-text-text-and-icon">{code}</pre>
      <div className="flex items-center ml-auto self-start">
        {isCopied ? 'copied' : null}
        <IconButton
          className="dark:focus:outline-none"
          icon={<CopyLineIcon />}
          variant="flat"
          onClick={() => {
            copy(code);
          }}
        />
      </div>
    </>
  );
};
const Skeleton = () => {
  return (
    <>
      <div className="animate-pulse flex flex-col gap-y-2">
        <div className="h-2 w-[130px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[110px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[150px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[140px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[100px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[100px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[135px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[320px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[160px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[380px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[340px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[200px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[190px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[240px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[200px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[400px] bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-2 w-[260px] bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </>
  );
};
export const LinuxConnectorForm = () => {
  return (
    <Stepper>
      <Step
        indicator={
          <StepIndicator className="rounded-full">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="w-4 h-4">
                <InfoIcon />
              </span>
            </div>
            <StepLine />
          </StepIndicator>
        }
        title="Connect Linux VM"
      >
        <div className="text-p7 dark:text-text-text-and-icon">
          Connect to Linux VM. Find out more information by{' '}
          <DFLink
            href={`https://community.deepfence.io/threatmapper/docs/v2.0/sensors/docker`}
            target="_blank"
            rel="noreferrer"
            className="mt-2"
          >
            reading our documentation
          </DFLink>
          .
        </div>
      </Step>
      <Step
        indicator={
          <StepIndicator className="rounded-full">
            <span className="w-6 h-6 flex items-center justify-center">1</span>
          </StepIndicator>
        }
        title="Deploy"
      >
        <div className="text-p7 dark:text-text-text-and-icon">
          <p className="mb-2.5">
            Copy the following commands and paste them into your shell.
          </p>
          <Card className="w-full relative flex p-4">
            <Suspense fallback={<Skeleton />}>
              <Command />
            </Suspense>
          </Card>
        </div>
      </Step>
    </Stepper>
  );
};
