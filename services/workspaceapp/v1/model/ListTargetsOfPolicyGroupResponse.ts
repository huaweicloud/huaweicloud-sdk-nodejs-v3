import { Target } from './Target';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTargetsOfPolicyGroupResponse extends SdkResponse {
    public targets?: Array<Target>;
    public constructor() { 
        super();
    }
    public withTargets(targets: Array<Target>): ListTargetsOfPolicyGroupResponse {
        this['targets'] = targets;
        return this;
    }
}