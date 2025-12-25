import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableAlertRuleResponse extends SdkResponse {
    private 'alert_rule_id'?: string;
    public status?: JobStatus;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withAlertRuleId(alertRuleId: string): DisableAlertRuleResponse {
        this['alert_rule_id'] = alertRuleId;
        return this;
    }
    public set alertRuleId(alertRuleId: string  | undefined) {
        this['alert_rule_id'] = alertRuleId;
    }
    public get alertRuleId(): string | undefined {
        return this['alert_rule_id'];
    }
    public withStatus(status: JobStatus): DisableAlertRuleResponse {
        this['status'] = status;
        return this;
    }
    public withProcessStatus(processStatus: JobProcessStatus): DisableAlertRuleResponse {
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