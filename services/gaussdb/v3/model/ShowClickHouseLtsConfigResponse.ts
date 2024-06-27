import { ChInstanceLtsConfigs } from './ChInstanceLtsConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClickHouseLtsConfigResponse extends SdkResponse {
    private 'instance_lts_configs'?: Array<ChInstanceLtsConfigs>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<ChInstanceLtsConfigs>): ShowClickHouseLtsConfigResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<ChInstanceLtsConfigs>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<ChInstanceLtsConfigs> | undefined {
        return this['instance_lts_configs'];
    }
    public withTotalCount(totalCount: number): ShowClickHouseLtsConfigResponse {
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