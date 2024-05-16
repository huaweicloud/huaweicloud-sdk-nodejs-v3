import { HtapInstanceListInstances } from './HtapInstanceListInstances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHtapInstanceInfoResponse extends SdkResponse {
    public total?: number;
    public instances?: Array<HtapInstanceListInstances>;
    private 'max_htap_instance_num_of_taurus'?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHtapInstanceInfoResponse {
        this['total'] = total;
        return this;
    }
    public withInstances(instances: Array<HtapInstanceListInstances>): ListHtapInstanceInfoResponse {
        this['instances'] = instances;
        return this;
    }
    public withMaxHtapInstanceNumOfTaurus(maxHtapInstanceNumOfTaurus: number): ListHtapInstanceInfoResponse {
        this['max_htap_instance_num_of_taurus'] = maxHtapInstanceNumOfTaurus;
        return this;
    }
    public set maxHtapInstanceNumOfTaurus(maxHtapInstanceNumOfTaurus: number  | undefined) {
        this['max_htap_instance_num_of_taurus'] = maxHtapInstanceNumOfTaurus;
    }
    public get maxHtapInstanceNumOfTaurus(): number | undefined {
        return this['max_htap_instance_num_of_taurus'];
    }
}