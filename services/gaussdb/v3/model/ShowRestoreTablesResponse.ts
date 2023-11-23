import { RestoreDatabaseInfos } from './RestoreDatabaseInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestoreTablesResponse extends SdkResponse {
    private 'total_databases'?: number;
    public databases?: Array<RestoreDatabaseInfos>;
    public constructor() { 
        super();
    }
    public withTotalDatabases(totalDatabases: number): ShowRestoreTablesResponse {
        this['total_databases'] = totalDatabases;
        return this;
    }
    public set totalDatabases(totalDatabases: number  | undefined) {
        this['total_databases'] = totalDatabases;
    }
    public get totalDatabases(): number | undefined {
        return this['total_databases'];
    }
    public withDatabases(databases: Array<RestoreDatabaseInfos>): ShowRestoreTablesResponse {
        this['databases'] = databases;
        return this;
    }
}