import { ColdTableMetaInfo } from './ColdTableMetaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListColdTableMetasResponse extends SdkResponse {
    public total?: number;
    private 'meta_info'?: Array<ColdTableMetaInfo>;
    private 'total_data_size'?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListColdTableMetasResponse {
        this['total'] = total;
        return this;
    }
    public withMetaInfo(metaInfo: Array<ColdTableMetaInfo>): ListColdTableMetasResponse {
        this['meta_info'] = metaInfo;
        return this;
    }
    public set metaInfo(metaInfo: Array<ColdTableMetaInfo>  | undefined) {
        this['meta_info'] = metaInfo;
    }
    public get metaInfo(): Array<ColdTableMetaInfo> | undefined {
        return this['meta_info'];
    }
    public withTotalDataSize(totalDataSize: number): ListColdTableMetasResponse {
        this['total_data_size'] = totalDataSize;
        return this;
    }
    public set totalDataSize(totalDataSize: number  | undefined) {
        this['total_data_size'] = totalDataSize;
    }
    public get totalDataSize(): number | undefined {
        return this['total_data_size'];
    }
}