import { ShowInstanceResp } from './ShowInstanceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesDetailsResponse extends SdkResponse {
    public instances?: Array<ShowInstanceResp>;
    private 'instance_num'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ShowInstanceResp>): ListInstancesDetailsResponse {
        this['instances'] = instances;
        return this;
    }
    public withInstanceNum(instanceNum: number): ListInstancesDetailsResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
}