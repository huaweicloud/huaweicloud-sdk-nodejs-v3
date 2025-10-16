import { ShowStatusAppItem } from './ShowStatusAppItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatusAppResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'app_list'?: Array<ShowStatusAppItem>;
    private 'total_access_count'?: number;
    private 'success_access_count'?: number;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatusAppResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withAppList(appList: Array<ShowStatusAppItem>): ShowStatusAppResponse {
        this['app_list'] = appList;
        return this;
    }
    public set appList(appList: Array<ShowStatusAppItem>  | undefined) {
        this['app_list'] = appList;
    }
    public get appList(): Array<ShowStatusAppItem> | undefined {
        return this['app_list'];
    }
    public withTotalAccessCount(totalAccessCount: number): ShowStatusAppResponse {
        this['total_access_count'] = totalAccessCount;
        return this;
    }
    public set totalAccessCount(totalAccessCount: number  | undefined) {
        this['total_access_count'] = totalAccessCount;
    }
    public get totalAccessCount(): number | undefined {
        return this['total_access_count'];
    }
    public withSuccessAccessCount(successAccessCount: number): ShowStatusAppResponse {
        this['success_access_count'] = successAccessCount;
        return this;
    }
    public set successAccessCount(successAccessCount: number  | undefined) {
        this['success_access_count'] = successAccessCount;
    }
    public get successAccessCount(): number | undefined {
        return this['success_access_count'];
    }
}