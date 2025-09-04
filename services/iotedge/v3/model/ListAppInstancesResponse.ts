import { QueryAppInstanceResp } from './QueryAppInstanceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppInstancesResponse extends SdkResponse {
    private 'app_instances'?: Array<QueryAppInstanceResp>;
    public constructor() { 
        super();
    }
    public withAppInstances(appInstances: Array<QueryAppInstanceResp>): ListAppInstancesResponse {
        this['app_instances'] = appInstances;
        return this;
    }
    public set appInstances(appInstances: Array<QueryAppInstanceResp>  | undefined) {
        this['app_instances'] = appInstances;
    }
    public get appInstances(): Array<QueryAppInstanceResp> | undefined {
        return this['app_instances'];
    }
}