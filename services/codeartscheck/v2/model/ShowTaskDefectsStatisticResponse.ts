import { StatisticSeverityV2 } from './StatisticSeverityV2';
import { StatisticStatusV2 } from './StatisticStatusV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDefectsStatisticResponse extends SdkResponse {
    public severity?: StatisticSeverityV2;
    public status?: StatisticStatusV2;
    private 'last_check_time'?: string;
    private 'last_check_finish_time'?: string;
    public constructor() { 
        super();
    }
    public withSeverity(severity: StatisticSeverityV2): ShowTaskDefectsStatisticResponse {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: StatisticStatusV2): ShowTaskDefectsStatisticResponse {
        this['status'] = status;
        return this;
    }
    public withLastCheckTime(lastCheckTime: string): ShowTaskDefectsStatisticResponse {
        this['last_check_time'] = lastCheckTime;
        return this;
    }
    public set lastCheckTime(lastCheckTime: string  | undefined) {
        this['last_check_time'] = lastCheckTime;
    }
    public get lastCheckTime(): string | undefined {
        return this['last_check_time'];
    }
    public withLastCheckFinishTime(lastCheckFinishTime: string): ShowTaskDefectsStatisticResponse {
        this['last_check_finish_time'] = lastCheckFinishTime;
        return this;
    }
    public set lastCheckFinishTime(lastCheckFinishTime: string  | undefined) {
        this['last_check_finish_time'] = lastCheckFinishTime;
    }
    public get lastCheckFinishTime(): string | undefined {
        return this['last_check_finish_time'];
    }
}