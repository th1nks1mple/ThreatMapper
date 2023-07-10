import cx from 'classnames';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Breadcrumb, BreadcrumbLink } from 'ui-components';

import { DFLink } from '@/components/DFLink';

type ConnectorHeaderProps = {
  title: string;
  description: string;
  endComponent?: JSX.Element;
};

export const ConnectorHeader = ({
  title,
  description,
  endComponent,
}: ConnectorHeaderProps) => {
  const location = useLocation();

  const isAddConnectorRoutePath = () => {
    return (
      location.pathname.startsWith('/onboard/connectors') ||
      location.pathname.includes('/onboard/instructions')
    );
  };

  const isScanRoutePath = () => {
    return (
      location.pathname.startsWith('/onboard/scan/choose') ||
      location.pathname.startsWith('/onboard/scan/configure')
    );
  };

  const isViewScanSummaryRoutePath = () => {
    return location.pathname.includes('scan/view-summary');
  };

  return (
    <div className="pt-6 mb-4">
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbLink isLink>
            <span
              className={twMerge(
                cx(
                  'w-6 h-6 rounded-full dark:bg-df-gray-200 text-p7 flex items-center justify-center',
                  'dark:bg-gray-700 dark:text-df-gray-100 cursor-default',
                ),
              )}
            >
              1
            </span>
            <DFLink
              unstyled
              className={cx('flex items-center ml-2', {
                ['dark:text-text-text-and-icon']: !isAddConnectorRoutePath(),
              })}
              to={'/onboard/connectors/add-connectors'}
            >
              Add a connector
            </DFLink>
          </BreadcrumbLink>
          <BreadcrumbLink className="cursor-auto">
            <span
              className={twMerge(
                cx(
                  'w-6 h-6 rounded-full dark:bg-df-gray-200 text-p7 flex items-center justify-center',
                  'dark:bg-gray-700 dark:text-df-gray-100 cursor-default',
                ),
              )}
            >
              2
            </span>

            <span
              className={cx('cursor-auto ml-2', {
                ['dark:text-text-link']: isScanRoutePath(),
              })}
            >
              Scan infrastructure
            </span>
          </BreadcrumbLink>
          <BreadcrumbLink>
            <span
              className={twMerge(
                cx(
                  'w-6 h-6 rounded-full dark:bg-df-gray-200 text-p7 flex items-center justify-center',
                  'dark:bg-gray-700 dark:text-df-gray-100 cursor-default',
                ),
              )}
            >
              3
            </span>
            <span
              className={cx('cursor-auto ml-2', {
                ['dark:text-text-link']: isViewScanSummaryRoutePath(),
              })}
            >
              View scan results
            </span>
          </BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex items-center">
        <div>
          <h1 className={`text-h1 dark:text-text-input-value`}>{title}</h1>
          {description && (
            <p
              className={`text-p4 mt-1.5 mb-4 dark:text-text-text-and-icon text-gray-900`}
            >
              {description}
            </p>
          )}
        </div>
        {endComponent ? <div className="ml-auto">{endComponent}</div> : null}
      </div>
    </div>
  );
};
