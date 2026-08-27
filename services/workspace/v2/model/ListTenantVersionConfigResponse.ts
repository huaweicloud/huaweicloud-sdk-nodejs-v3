import { TenantVersionInfo } from './TenantVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantVersionConfigResponse extends SdkResponse {
    private 'total_count'?: number;
    public records?: Array<TenantVersionInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTenantVersionConfigResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRecords(records: Array<TenantVersionInfo>): ListTenantVersionConfigResponse {
        this['records'] = records;
        return this;
    }
}