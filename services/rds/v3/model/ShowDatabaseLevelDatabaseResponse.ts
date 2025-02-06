import { DatabaseBackupInfo } from './DatabaseBackupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseLevelDatabaseResponse extends SdkResponse {
    public databases?: Array<DatabaseBackupInfo>;
    private 'database_limit'?: number;
    private 'bucket_name'?: string;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<DatabaseBackupInfo>): ShowDatabaseLevelDatabaseResponse {
        this['databases'] = databases;
        return this;
    }
    public withDatabaseLimit(databaseLimit: number): ShowDatabaseLevelDatabaseResponse {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withBucketName(bucketName: string): ShowDatabaseLevelDatabaseResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}