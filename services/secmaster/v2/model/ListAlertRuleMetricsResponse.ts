import { AlertSeverities } from './AlertSeverities';
import { CuUsage } from './CuUsage';
import { MetricsStatus } from './MetricsStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleMetricsResponse extends SdkResponse {
    private 'cu_usage'?: CuUsage;
    private 'alert_severities'?: AlertSeverities;
    private 'metrics_status'?: MetricsStatus;
    public constructor() { 
        super();
    }
    public withCuUsage(cuUsage: CuUsage): ListAlertRuleMetricsResponse {
        this['cu_usage'] = cuUsage;
        return this;
    }
    public set cuUsage(cuUsage: CuUsage  | undefined) {
        this['cu_usage'] = cuUsage;
    }
    public get cuUsage(): CuUsage | undefined {
        return this['cu_usage'];
    }
    public withAlertSeverities(alertSeverities: AlertSeverities): ListAlertRuleMetricsResponse {
        this['alert_severities'] = alertSeverities;
        return this;
    }
    public set alertSeverities(alertSeverities: AlertSeverities  | undefined) {
        this['alert_severities'] = alertSeverities;
    }
    public get alertSeverities(): AlertSeverities | undefined {
        return this['alert_severities'];
    }
    public withMetricsStatus(metricsStatus: MetricsStatus): ListAlertRuleMetricsResponse {
        this['metrics_status'] = metricsStatus;
        return this;
    }
    public set metricsStatus(metricsStatus: MetricsStatus  | undefined) {
        this['metrics_status'] = metricsStatus;
    }
    public get metricsStatus(): MetricsStatus | undefined {
        return this['metrics_status'];
    }
}