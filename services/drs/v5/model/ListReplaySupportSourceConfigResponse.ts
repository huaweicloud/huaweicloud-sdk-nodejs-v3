import { ReplaySourceConfigResp } from './ReplaySourceConfigResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReplaySupportSourceConfigResponse extends SdkResponse {
    private 'config_list'?: Array<ReplaySourceConfigResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withConfigList(configList: Array<ReplaySourceConfigResp>): ListReplaySupportSourceConfigResponse {
        this['config_list'] = configList;
        return this;
    }
    public set configList(configList: Array<ReplaySourceConfigResp>  | undefined) {
        this['config_list'] = configList;
    }
    public get configList(): Array<ReplaySourceConfigResp> | undefined {
        return this['config_list'];
    }
    public withTotalCount(totalCount: number): ListReplaySupportSourceConfigResponse {
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