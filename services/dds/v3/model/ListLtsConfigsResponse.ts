import { ListLtsLogPolicyRespondBodyInstanceLtsConfigs } from './ListLtsLogPolicyRespondBodyInstanceLtsConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsConfigsResponse extends SdkResponse {
    private 'instance_lts_configs'?: Array<ListLtsLogPolicyRespondBodyInstanceLtsConfigs>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<ListLtsLogPolicyRespondBodyInstanceLtsConfigs>): ListLtsConfigsResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<ListLtsLogPolicyRespondBodyInstanceLtsConfigs>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<ListLtsLogPolicyRespondBodyInstanceLtsConfigs> | undefined {
        return this['instance_lts_configs'];
    }
    public withTotalCount(totalCount: number): ListLtsConfigsResponse {
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