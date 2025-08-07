import { ResourceMigrateRecord } from './ResourceMigrateRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMigrationRecordResponse extends SdkResponse {
    public records?: Array<ResourceMigrateRecord>;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<ResourceMigrateRecord>): ListMigrationRecordResponse {
        this['records'] = records;
        return this;
    }
}