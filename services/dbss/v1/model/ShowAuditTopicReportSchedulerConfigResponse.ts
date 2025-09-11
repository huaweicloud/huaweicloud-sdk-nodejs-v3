import { SchedulerConfigBase } from './SchedulerConfigBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditTopicReportSchedulerConfigResponse extends SdkResponse {
    public scheduler?: SchedulerConfigBase;
    private 'smn_effective'?: boolean;
    public constructor() { 
        super();
    }
    public withScheduler(scheduler: SchedulerConfigBase): ShowAuditTopicReportSchedulerConfigResponse {
        this['scheduler'] = scheduler;
        return this;
    }
    public withSmnEffective(smnEffective: boolean): ShowAuditTopicReportSchedulerConfigResponse {
        this['smn_effective'] = smnEffective;
        return this;
    }
    public set smnEffective(smnEffective: boolean  | undefined) {
        this['smn_effective'] = smnEffective;
    }
    public get smnEffective(): boolean | undefined {
        return this['smn_effective'];
    }
}