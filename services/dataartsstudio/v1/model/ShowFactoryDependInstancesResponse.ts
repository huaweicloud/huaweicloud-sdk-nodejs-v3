import { ShowFactoryDependInstancesRespDependInstancesInfo } from './ShowFactoryDependInstancesRespDependInstancesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactoryDependInstancesResponse extends SdkResponse {
    private 'depend_instances_info'?: Array<ShowFactoryDependInstancesRespDependInstancesInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDependInstancesInfo(dependInstancesInfo: Array<ShowFactoryDependInstancesRespDependInstancesInfo>): ShowFactoryDependInstancesResponse {
        this['depend_instances_info'] = dependInstancesInfo;
        return this;
    }
    public set dependInstancesInfo(dependInstancesInfo: Array<ShowFactoryDependInstancesRespDependInstancesInfo>  | undefined) {
        this['depend_instances_info'] = dependInstancesInfo;
    }
    public get dependInstancesInfo(): Array<ShowFactoryDependInstancesRespDependInstancesInfo> | undefined {
        return this['depend_instances_info'];
    }
    public withTotal(total: number): ShowFactoryDependInstancesResponse {
        this['total'] = total;
        return this;
    }
}