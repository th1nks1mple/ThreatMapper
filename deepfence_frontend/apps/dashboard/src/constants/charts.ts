import { colors, preset } from 'tailwind-preset';

import { Mode } from '@/theme/ThemeContext';
import { PostureSeverityType } from '@/types/common';

export const getSeverityColorMap = (theme: Mode) => {
  const color = colors[theme];
  return {
    critical: color.chart.critical,
    high: color.chart.high,
    medium: color.chart.medium,
    low: color.chart.low,
    unknown: color.chart.unknown,
  };
};

export function getColorForCVSSScore(score: number | undefined): string {
  if (!score) return preset.theme.extend.colors['df-gray'][600];
  if (score > 0 && score <= 3.9) return preset.theme.extend.colors.chart.yellow1;
  if (score >= 4 && score <= 6.9) return preset.theme.extend.colors.status.warning;
  if (score >= 7 && score <= 8.9) return preset.theme.extend.colors.chart.orange;
  if (score >= 9 && score <= 10) return preset.theme.extend.colors.status.error;
  return preset.theme.extend.colors['df-gray'][600];
}

export const POSTURE_STATUS_COLORS: {
  [x in PostureSeverityType]: string;
} = {
  alarm: preset.theme.extend.colors.status.error,
  info: preset.theme.extend.colors.status.info,
  ok: preset.theme.extend.colors.status.success,
  skip: preset.theme.extend.colors['df-gray'][600],

  pass: preset.theme.extend.colors.status.success,
  warn: preset.theme.extend.colors.status.warning,
  note: preset.theme.extend.colors['df-gray'][600],
  delete: preset.theme.extend.colors.chart.red,
};

export function getColorForCompliancePercent(
  theme: Mode,
  percent: number | undefined | null,
): string {
  if (percent === undefined || percent === null) {
    return colors[theme].chart.unknown;
  }
  if (percent >= 80 && percent <= 100) {
    return preset.theme.extend.colors.status.success;
  } else if (percent >= 30 && percent < 80) {
    return preset.theme.extend.colors.status.warning;
  } else if (percent < 30) {
    return preset.theme.extend.colors.status.error;
  }
  return colors[theme].chart.unknown;
}
