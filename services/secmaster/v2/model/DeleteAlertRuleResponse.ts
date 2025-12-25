import { JobProcessStatus } from './JobProcessStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAlertRuleResponse extends SdkResponse {
    private 'alert_rule_id'?: string;
    private 'delete_time'?: number;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withAlertRuleId(alertRuleId: string): DeleteAlertRuleResponse {
        this['alert_rule_id'] = alertRuleId;
        return this;
    }
    public set alertRuleId(alertRuleId: string  | undefined) {
        this['alert_rule_id'] = alertRuleId;
    }
    public get alertRuleId(): string | undefined {
        return this['alert_rule_id'];
    }
    public withDeleteTime(deleteTime: number): DeleteAlertRuleResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withProcessStatus(processStatus: JobProcessStatus): DeleteAlertRuleResponse {
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