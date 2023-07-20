import { SlaReportsValue } from './SlaReportsValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantMetricResponse extends SdkResponse {
    public count?: Array<SlaReportsValue>;
    public duration?: Array<SlaReportsValue>;
    private 'fail_count'?: Array<SlaReportsValue>;
    private 'running_count'?: Array<SlaReportsValue>;
    public constructor() { 
        super();
    }
    public withCount(count: Array<SlaReportsValue>): ShowTenantMetricResponse {
        this['count'] = count;
        return this;
    }
    public withDuration(duration: Array<SlaReportsValue>): ShowTenantMetricResponse {
        this['duration'] = duration;
        return this;
    }
    public withFailCount(failCount: Array<SlaReportsValue>): ShowTenantMetricResponse {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: Array<SlaReportsValue>  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): Array<SlaReportsValue> | undefined {
        return this['fail_count'];
    }
    public withRunningCount(runningCount: Array<SlaReportsValue>): ShowTenantMetricResponse {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: Array<SlaReportsValue>  | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount(): Array<SlaReportsValue> | undefined {
        return this['running_count'];
    }
}