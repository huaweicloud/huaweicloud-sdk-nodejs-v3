import { InstanceListInfo } from './InstanceListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    private 'instance_num'?: number;
    public instances?: Array<InstanceListInfo>;
    public constructor() { 
        super();
    }
    public withInstanceNum(instanceNum: number): ListInstancesResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withInstances(instances: Array<InstanceListInfo>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}