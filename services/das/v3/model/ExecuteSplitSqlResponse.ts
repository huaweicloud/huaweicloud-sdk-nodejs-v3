
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteSplitSqlResponse extends SdkResponse {
    private 'sql_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSqlList(sqlList: Array<string>): ExecuteSplitSqlResponse {
        this['sql_list'] = sqlList;
        return this;
    }
    public set sqlList(sqlList: Array<string>  | undefined) {
        this['sql_list'] = sqlList;
    }
    public get sqlList(): Array<string> | undefined {
        return this['sql_list'];
    }
}