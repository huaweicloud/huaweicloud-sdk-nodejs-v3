
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreDatabasesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'database_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRestoreDatabasesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDatabaseNames(databaseNames: Array<string>): ListRestoreDatabasesResponse {
        this['database_names'] = databaseNames;
        return this;
    }
    public set databaseNames(databaseNames: Array<string>  | undefined) {
        this['database_names'] = databaseNames;
    }
    public get databaseNames(): Array<string> | undefined {
        return this['database_names'];
    }
}