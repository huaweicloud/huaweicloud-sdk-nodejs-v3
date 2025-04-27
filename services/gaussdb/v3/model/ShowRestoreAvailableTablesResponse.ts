import { RestoreDatabaseInfos } from './RestoreDatabaseInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestoreAvailableTablesResponse extends SdkResponse {
    private 'total_tables'?: number;
    public databases?: Array<RestoreDatabaseInfos>;
    public constructor() { 
        super();
    }
    public withTotalTables(totalTables: number): ShowRestoreAvailableTablesResponse {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withDatabases(databases: Array<RestoreDatabaseInfos>): ShowRestoreAvailableTablesResponse {
        this['databases'] = databases;
        return this;
    }
}