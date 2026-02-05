
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlBlackResponse extends SdkResponse {
    private 'sql_black_list_full_check'?: string;
    private 'sql_black_list_prefix_check'?: string;
    private 'sql_black_list_regex_check'?: string;
    public constructor() { 
        super();
    }
    public withSqlBlackListFullCheck(sqlBlackListFullCheck: string): ListSqlBlackResponse {
        this['sql_black_list_full_check'] = sqlBlackListFullCheck;
        return this;
    }
    public set sqlBlackListFullCheck(sqlBlackListFullCheck: string  | undefined) {
        this['sql_black_list_full_check'] = sqlBlackListFullCheck;
    }
    public get sqlBlackListFullCheck(): string | undefined {
        return this['sql_black_list_full_check'];
    }
    public withSqlBlackListPrefixCheck(sqlBlackListPrefixCheck: string): ListSqlBlackResponse {
        this['sql_black_list_prefix_check'] = sqlBlackListPrefixCheck;
        return this;
    }
    public set sqlBlackListPrefixCheck(sqlBlackListPrefixCheck: string  | undefined) {
        this['sql_black_list_prefix_check'] = sqlBlackListPrefixCheck;
    }
    public get sqlBlackListPrefixCheck(): string | undefined {
        return this['sql_black_list_prefix_check'];
    }
    public withSqlBlackListRegexCheck(sqlBlackListRegexCheck: string): ListSqlBlackResponse {
        this['sql_black_list_regex_check'] = sqlBlackListRegexCheck;
        return this;
    }
    public set sqlBlackListRegexCheck(sqlBlackListRegexCheck: string  | undefined) {
        this['sql_black_list_regex_check'] = sqlBlackListRegexCheck;
    }
    public get sqlBlackListRegexCheck(): string | undefined {
        return this['sql_black_list_regex_check'];
    }
}