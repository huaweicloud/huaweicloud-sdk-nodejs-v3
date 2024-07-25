import { InstanceLtsConfigResp } from './InstanceLtsConfigResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogLtsConfigsResponse extends SdkResponse {
    private 'instance_lts_configs'?: Array<InstanceLtsConfigResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<InstanceLtsConfigResp>): ListLogLtsConfigsResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<InstanceLtsConfigResp>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<InstanceLtsConfigResp> | undefined {
        return this['instance_lts_configs'];
    }
    public withTotalCount(totalCount: number): ListLogLtsConfigsResponse {
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