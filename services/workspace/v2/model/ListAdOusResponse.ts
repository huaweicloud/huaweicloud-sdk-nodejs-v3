import { AdOuInfo } from './AdOuInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAdOusResponse extends SdkResponse {
    private 'ou_infos'?: Array<AdOuInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOuInfos(ouInfos: Array<AdOuInfo>): ListAdOusResponse {
        this['ou_infos'] = ouInfos;
        return this;
    }
    public set ouInfos(ouInfos: Array<AdOuInfo>  | undefined) {
        this['ou_infos'] = ouInfos;
    }
    public get ouInfos(): Array<AdOuInfo> | undefined {
        return this['ou_infos'];
    }
    public withTotalCount(totalCount: number): ListAdOusResponse {
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