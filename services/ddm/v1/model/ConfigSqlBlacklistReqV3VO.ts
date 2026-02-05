

export class ConfigSqlBlacklistReqV3VO {
    private 'sql_black_list_full_check'?: string;
    private 'request_id'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'logic_db_name'?: string;
    private 'sql_black_list_prefix_check'?: string;
    private 'sql_black_list_regex_check'?: string;
    public constructor() { 
    }
    public withSqlBlackListFullCheck(sqlBlackListFullCheck: string): ConfigSqlBlacklistReqV3VO {
        this['sql_black_list_full_check'] = sqlBlackListFullCheck;
        return this;
    }
    public set sqlBlackListFullCheck(sqlBlackListFullCheck: string  | undefined) {
        this['sql_black_list_full_check'] = sqlBlackListFullCheck;
    }
    public get sqlBlackListFullCheck(): string | undefined {
        return this['sql_black_list_full_check'];
    }
    public withRequestId(requestId: string): ConfigSqlBlacklistReqV3VO {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withProjectId(projectId: string): ConfigSqlBlacklistReqV3VO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): ConfigSqlBlacklistReqV3VO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogicDbName(logicDbName: string): ConfigSqlBlacklistReqV3VO {
        this['logic_db_name'] = logicDbName;
        return this;
    }
    public set logicDbName(logicDbName: string  | undefined) {
        this['logic_db_name'] = logicDbName;
    }
    public get logicDbName(): string | undefined {
        return this['logic_db_name'];
    }
    public withSqlBlackListPrefixCheck(sqlBlackListPrefixCheck: string): ConfigSqlBlacklistReqV3VO {
        this['sql_black_list_prefix_check'] = sqlBlackListPrefixCheck;
        return this;
    }
    public set sqlBlackListPrefixCheck(sqlBlackListPrefixCheck: string  | undefined) {
        this['sql_black_list_prefix_check'] = sqlBlackListPrefixCheck;
    }
    public get sqlBlackListPrefixCheck(): string | undefined {
        return this['sql_black_list_prefix_check'];
    }
    public withSqlBlackListRegexCheck(sqlBlackListRegexCheck: string): ConfigSqlBlacklistReqV3VO {
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