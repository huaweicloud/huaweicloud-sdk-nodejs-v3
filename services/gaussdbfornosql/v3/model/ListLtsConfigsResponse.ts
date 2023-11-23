import { InstanceLogConfig } from './InstanceLogConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsConfigsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'instance_lts_configs'?: Array<InstanceLogConfig>;
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
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<InstanceLogConfig>): ListLtsConfigsResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<InstanceLogConfig>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<InstanceLogConfig> | undefined {
        return this['instance_lts_configs'];
    }
}