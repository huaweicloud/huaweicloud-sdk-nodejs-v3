import { DatabaseVersionResult } from './DatabaseVersionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseVersionsResponse extends SdkResponse {
    private 'database_versions'?: Array<DatabaseVersionResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDatabaseVersions(databaseVersions: Array<DatabaseVersionResult>): ListDatabaseVersionsResponse {
        this['database_versions'] = databaseVersions;
        return this;
    }
    public set databaseVersions(databaseVersions: Array<DatabaseVersionResult>  | undefined) {
        this['database_versions'] = databaseVersions;
    }
    public get databaseVersions(): Array<DatabaseVersionResult> | undefined {
        return this['database_versions'];
    }
    public withTotal(total: number): ListDatabaseVersionsResponse {
        this['total'] = total;
        return this;
    }
}