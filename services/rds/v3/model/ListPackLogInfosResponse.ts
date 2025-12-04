import { PackLogInfo } from './PackLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPackLogInfosResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'pack_log_infos'?: Array<PackLogInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListPackLogInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPackLogInfos(packLogInfos: Array<PackLogInfo>): ListPackLogInfosResponse {
        this['pack_log_infos'] = packLogInfos;
        return this;
    }
    public set packLogInfos(packLogInfos: Array<PackLogInfo>  | undefined) {
        this['pack_log_infos'] = packLogInfos;
    }
    public get packLogInfos(): Array<PackLogInfo> | undefined {
        return this['pack_log_infos'];
    }
}