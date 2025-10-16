import { ShowResourceDetailAccessKeyResponseBodyAkList } from './ShowResourceDetailAccessKeyResponseBodyAkList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceDetailAccessKeyResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'ak_list'?: Array<ShowResourceDetailAccessKeyResponseBodyAkList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowResourceDetailAccessKeyResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withAkList(akList: Array<ShowResourceDetailAccessKeyResponseBodyAkList>): ShowResourceDetailAccessKeyResponse {
        this['ak_list'] = akList;
        return this;
    }
    public set akList(akList: Array<ShowResourceDetailAccessKeyResponseBodyAkList>  | undefined) {
        this['ak_list'] = akList;
    }
    public get akList(): Array<ShowResourceDetailAccessKeyResponseBodyAkList> | undefined {
        return this['ak_list'];
    }
    public withTotalCount(totalCount: number): ShowResourceDetailAccessKeyResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}