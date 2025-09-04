import { TableMetaInfo } from './TableMetaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTableMetaInfoResponse extends SdkResponse {
    private 'table_meta_infos'?: Array<TableMetaInfo>;
    private 'table_names'?: Array<string>;
    private 'database_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTableMetaInfos(tableMetaInfos: Array<TableMetaInfo>): ShowTableMetaInfoResponse {
        this['table_meta_infos'] = tableMetaInfos;
        return this;
    }
    public set tableMetaInfos(tableMetaInfos: Array<TableMetaInfo>  | undefined) {
        this['table_meta_infos'] = tableMetaInfos;
    }
    public get tableMetaInfos(): Array<TableMetaInfo> | undefined {
        return this['table_meta_infos'];
    }
    public withTableNames(tableNames: Array<string>): ShowTableMetaInfoResponse {
        this['table_names'] = tableNames;
        return this;
    }
    public set tableNames(tableNames: Array<string>  | undefined) {
        this['table_names'] = tableNames;
    }
    public get tableNames(): Array<string> | undefined {
        return this['table_names'];
    }
    public withDatabaseNames(databaseNames: Array<string>): ShowTableMetaInfoResponse {
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