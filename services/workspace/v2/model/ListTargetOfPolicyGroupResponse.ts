import { Target } from './Target';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTargetOfPolicyGroupResponse extends SdkResponse {
    public targets?: Array<Target>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTargets(targets: Array<Target>): ListTargetOfPolicyGroupResponse {
        this['targets'] = targets;
        return this;
    }
    public withTotalCount(totalCount: number): ListTargetOfPolicyGroupResponse {
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