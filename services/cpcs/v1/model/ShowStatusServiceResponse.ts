import { ShowStatusServiceResponseBodyServerList } from './ShowStatusServiceResponseBodyServerList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatusServiceResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'server_list'?: Array<ShowStatusServiceResponseBodyServerList>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatusServiceResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withServerList(serverList: Array<ShowStatusServiceResponseBodyServerList>): ShowStatusServiceResponse {
        this['server_list'] = serverList;
        return this;
    }
    public set serverList(serverList: Array<ShowStatusServiceResponseBodyServerList>  | undefined) {
        this['server_list'] = serverList;
    }
    public get serverList(): Array<ShowStatusServiceResponseBodyServerList> | undefined {
        return this['server_list'];
    }
}