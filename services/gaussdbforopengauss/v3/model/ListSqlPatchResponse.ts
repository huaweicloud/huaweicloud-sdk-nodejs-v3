import { SqlPatchInfosResult } from './SqlPatchInfosResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlPatchResponse extends SdkResponse {
    private 'sql_patch_infos'?: Array<SqlPatchInfosResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSqlPatchInfos(sqlPatchInfos: Array<SqlPatchInfosResult>): ListSqlPatchResponse {
        this['sql_patch_infos'] = sqlPatchInfos;
        return this;
    }
    public set sqlPatchInfos(sqlPatchInfos: Array<SqlPatchInfosResult>  | undefined) {
        this['sql_patch_infos'] = sqlPatchInfos;
    }
    public get sqlPatchInfos(): Array<SqlPatchInfosResult> | undefined {
        return this['sql_patch_infos'];
    }
    public withTotal(total: number): ListSqlPatchResponse {
        this['total'] = total;
        return this;
    }
}