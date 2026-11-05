import { SupabaseApplicationApiKeyRecord } from './SupabaseApplicationApiKeyRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupabaseApplicationApiKeysResponse extends SdkResponse {
    private 'total_count'?: number;
    public data?: Array<SupabaseApplicationApiKeyRecord>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListSupabaseApplicationApiKeysResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withData(data: Array<SupabaseApplicationApiKeyRecord>): ListSupabaseApplicationApiKeysResponse {
        this['data'] = data;
        return this;
    }
}