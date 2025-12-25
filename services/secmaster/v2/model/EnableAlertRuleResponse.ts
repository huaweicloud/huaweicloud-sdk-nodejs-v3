import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableAlertRuleResponse extends SdkResponse {
    private 'alert_rule_id'?: string;
    public status?: JobStatus;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withAlertRuleId(alertRuleId: string): EnableAlertRuleResponse {
        this['alert_rule_id'] = alertRuleId;
        return this;
    }
    public set alertRuleId(alertRuleId: string  | undefined) {
        this['alert_rule_id'] = alertRuleId;
    }
    public get alertRuleId(): string | undefined {
        return this['alert_rule_id'];
    }
    public withStatus(status: JobStatus): EnableAlertRuleResponse {
        this['status'] = status;
        return this;
    }
    public withProcessStatus(processStatus: JobProcessStatus): EnableAlertRuleResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: JobProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): JobProcessStatus | undefined {
        return this['process_status'];
    }
}