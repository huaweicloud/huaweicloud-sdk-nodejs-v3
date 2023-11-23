
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreTablesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'table_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRestoreTablesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTableNames(tableNames: Array<string>): ListRestoreTablesResponse {
        this['table_names'] = tableNames;
        return this;
    }
    public set tableNames(tableNames: Array<string>  | undefined) {
        this['table_names'] = tableNames;
    }
    public get tableNames(): Array<string> | undefined {
        return this['table_names'];
    }
}