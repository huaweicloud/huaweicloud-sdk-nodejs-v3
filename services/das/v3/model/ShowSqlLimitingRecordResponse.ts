import { SqlLimitingRecordInfo } from './SqlLimitingRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitingRecordResponse extends SdkResponse {
    private 'sql_limiting_record_list'?: Array<SqlLimitingRecordInfo>;
    public total?: number;
    private 'can_show_limit_count'?: boolean;
    public constructor() { 
        super();
    }
    public withSqlLimitingRecordList(sqlLimitingRecordList: Array<SqlLimitingRecordInfo>): ShowSqlLimitingRecordResponse {
        this['sql_limiting_record_list'] = sqlLimitingRecordList;
        return this;
    }
    public set sqlLimitingRecordList(sqlLimitingRecordList: Array<SqlLimitingRecordInfo>  | undefined) {
        this['sql_limiting_record_list'] = sqlLimitingRecordList;
    }
    public get sqlLimitingRecordList(): Array<SqlLimitingRecordInfo> | undefined {
        return this['sql_limiting_record_list'];
    }
    public withTotal(total: number): ShowSqlLimitingRecordResponse {
        this['total'] = total;
        return this;
    }
    public withCanShowLimitCount(canShowLimitCount: boolean): ShowSqlLimitingRecordResponse {
        this['can_show_limit_count'] = canShowLimitCount;
        return this;
    }
    public set canShowLimitCount(canShowLimitCount: boolean  | undefined) {
        this['can_show_limit_count'] = canShowLimitCount;
    }
    public get canShowLimitCount(): boolean | undefined {
        return this['can_show_limit_count'];
    }
}