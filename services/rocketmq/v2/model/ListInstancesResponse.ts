import { InstanceDetail } from './InstanceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public instances?: Array<InstanceDetail>;
    private 'instance_num'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceDetail>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
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
}