import { LtsConfigsV3 } from './LtsConfigsV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLtsConfigsResponse extends SdkResponse {
    private 'instance_lts_configs'?: Array<LtsConfigsV3>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<LtsConfigsV3>): ShowLtsConfigsResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<LtsConfigsV3>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<LtsConfigsV3> | undefined {
        return this['instance_lts_configs'];
    }
    public withTotalCount(totalCount: number): ShowLtsConfigsResponse {
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