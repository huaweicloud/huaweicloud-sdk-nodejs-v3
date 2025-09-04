import { HtapLTSConfigResponseInstanceLtsConfigs } from './HtapLTSConfigResponseInstanceLtsConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHtapLtsConfigResponse extends SdkResponse {
    private 'instance_lts_configs'?: Array<HtapLTSConfigResponseInstanceLtsConfigs>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceLtsConfigs(instanceLtsConfigs: Array<HtapLTSConfigResponseInstanceLtsConfigs>): ShowHtapLtsConfigResponse {
        this['instance_lts_configs'] = instanceLtsConfigs;
        return this;
    }
    public set instanceLtsConfigs(instanceLtsConfigs: Array<HtapLTSConfigResponseInstanceLtsConfigs>  | undefined) {
        this['instance_lts_configs'] = instanceLtsConfigs;
    }
    public get instanceLtsConfigs(): Array<HtapLTSConfigResponseInstanceLtsConfigs> | undefined {
        return this['instance_lts_configs'];
    }
    public withTotalCount(totalCount: number): ShowHtapLtsConfigResponse {
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