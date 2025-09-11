import { InstanceLtsLogConfigResult } from './InstanceLtsLogConfigResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsConfigsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'instance_lts_configs'?: Array<InstanceLtsLogConfigResult>;
    public constructor() { 
        super();
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
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<InstanceLtsLogConfigResult>): ListLtsConfigsResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<InstanceLtsLogConfigResult>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<InstanceLtsLogConfigResult> | undefined {
        return this['instance_lts_configs'];
    }
}