import { IdentitySourceSyncRecordVo } from './IdentitySourceSyncRecordVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncRecordsResponse extends SdkResponse {
    public count?: number;
    private 'sync_records'?: Array<IdentitySourceSyncRecordVo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSyncRecordsResponse {
        this['count'] = count;
        return this;
    }
    public withSyncRecords(syncRecords: Array<IdentitySourceSyncRecordVo>): ListSyncRecordsResponse {
        this['sync_records'] = syncRecords;
        return this;
    }
    public set syncRecords(syncRecords: Array<IdentitySourceSyncRecordVo>  | undefined) {
        this['sync_records'] = syncRecords;
    }
    public get syncRecords(): Array<IdentitySourceSyncRecordVo> | undefined {
        return this['sync_records'];
    }
}