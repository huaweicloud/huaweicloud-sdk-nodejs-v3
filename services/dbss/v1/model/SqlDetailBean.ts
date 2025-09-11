

export class SqlDetailBean {
    private 'audit_result'?: string;
    private 'client_port'?: number;
    private 'client_ip'?: string;
    private 'client_mac'?: string;
    private 'client_name'?: string;
    private 'client_os_name'?: string;
    private 'client_os_user'?: string;
    private 'client_port_str'?: string;
    private 'client_tool'?: string;
    private 'db_port'?: number;
    private 'db_instance'?: string;
    private 'db_ip'?: string;
    private 'db_mac'?: string;
    private 'db_port_str'?: string;
    private 'db_service_name'?: string;
    private 'db_session_id'?: string;
    private 'db_type'?: string;
    private 'db_user'?: string;
    private 'end_time'?: string;
    private 'execute_time'?: number;
    public field?: string;
    public id?: string;
    public level?: string;
    public lines?: string;
    private 'log_result'?: string;
    private 'object'?: string;
    private 'object_type'?: string;
    private 'query_id'?: string;
    private 'query_type'?: string;
    private 'response_length'?: number;
    private 'response_status'?: string;
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    private 'rule_type'?: string;
    public schema?: string;
    private 'scope_id'?: string;
    private 'scope_name'?: string;
    private 'sql_response'?: string;
    private 'sql_result'?: string;
    private 'sql_statement'?: string;
    private 'start_time'?: string;
    private 'tcp_session_id'?: string;
    public constructor() { 
    }
    public withAuditResult(auditResult: string): SqlDetailBean {
        this['audit_result'] = auditResult;
        return this;
    }
    public set auditResult(auditResult: string  | undefined) {
        this['audit_result'] = auditResult;
    }
    public get auditResult(): string | undefined {
        return this['audit_result'];
    }
    public withClientPort(clientPort: number): SqlDetailBean {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): number | undefined {
        return this['client_port'];
    }
    public withClientIp(clientIp: string): SqlDetailBean {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientMac(clientMac: string): SqlDetailBean {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withClientName(clientName: string): SqlDetailBean {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientOsName(clientOsName: string): SqlDetailBean {
        this['client_os_name'] = clientOsName;
        return this;
    }
    public set clientOsName(clientOsName: string  | undefined) {
        this['client_os_name'] = clientOsName;
    }
    public get clientOsName(): string | undefined {
        return this['client_os_name'];
    }
    public withClientOsUser(clientOsUser: string): SqlDetailBean {
        this['client_os_user'] = clientOsUser;
        return this;
    }
    public set clientOsUser(clientOsUser: string  | undefined) {
        this['client_os_user'] = clientOsUser;
    }
    public get clientOsUser(): string | undefined {
        return this['client_os_user'];
    }
    public withClientPortStr(clientPortStr: string): SqlDetailBean {
        this['client_port_str'] = clientPortStr;
        return this;
    }
    public set clientPortStr(clientPortStr: string  | undefined) {
        this['client_port_str'] = clientPortStr;
    }
    public get clientPortStr(): string | undefined {
        return this['client_port_str'];
    }
    public withClientTool(clientTool: string): SqlDetailBean {
        this['client_tool'] = clientTool;
        return this;
    }
    public set clientTool(clientTool: string  | undefined) {
        this['client_tool'] = clientTool;
    }
    public get clientTool(): string | undefined {
        return this['client_tool'];
    }
    public withDbPort(dbPort: number): SqlDetailBean {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withDbInstance(dbInstance: string): SqlDetailBean {
        this['db_instance'] = dbInstance;
        return this;
    }
    public set dbInstance(dbInstance: string  | undefined) {
        this['db_instance'] = dbInstance;
    }
    public get dbInstance(): string | undefined {
        return this['db_instance'];
    }
    public withDbIp(dbIp: string): SqlDetailBean {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbMac(dbMac: string): SqlDetailBean {
        this['db_mac'] = dbMac;
        return this;
    }
    public set dbMac(dbMac: string  | undefined) {
        this['db_mac'] = dbMac;
    }
    public get dbMac(): string | undefined {
        return this['db_mac'];
    }
    public withDbPortStr(dbPortStr: string): SqlDetailBean {
        this['db_port_str'] = dbPortStr;
        return this;
    }
    public set dbPortStr(dbPortStr: string  | undefined) {
        this['db_port_str'] = dbPortStr;
    }
    public get dbPortStr(): string | undefined {
        return this['db_port_str'];
    }
    public withDbServiceName(dbServiceName: string): SqlDetailBean {
        this['db_service_name'] = dbServiceName;
        return this;
    }
    public set dbServiceName(dbServiceName: string  | undefined) {
        this['db_service_name'] = dbServiceName;
    }
    public get dbServiceName(): string | undefined {
        return this['db_service_name'];
    }
    public withDbSessionId(dbSessionId: string): SqlDetailBean {
        this['db_session_id'] = dbSessionId;
        return this;
    }
    public set dbSessionId(dbSessionId: string  | undefined) {
        this['db_session_id'] = dbSessionId;
    }
    public get dbSessionId(): string | undefined {
        return this['db_session_id'];
    }
    public withDbType(dbType: string): SqlDetailBean {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withDbUser(dbUser: string): SqlDetailBean {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withEndTime(endTime: string): SqlDetailBean {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExecuteTime(executeTime: number): SqlDetailBean {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withField(field: string): SqlDetailBean {
        this['field'] = field;
        return this;
    }
    public withId(id: string): SqlDetailBean {
        this['id'] = id;
        return this;
    }
    public withLevel(level: string): SqlDetailBean {
        this['level'] = level;
        return this;
    }
    public withLines(lines: string): SqlDetailBean {
        this['lines'] = lines;
        return this;
    }
    public withLogResult(logResult: string): SqlDetailBean {
        this['log_result'] = logResult;
        return this;
    }
    public set logResult(logResult: string  | undefined) {
        this['log_result'] = logResult;
    }
    public get logResult(): string | undefined {
        return this['log_result'];
    }
    public withModelObject(modelObject: string): SqlDetailBean {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withObjectType(objectType: string): SqlDetailBean {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withQueryId(queryId: string): SqlDetailBean {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withQueryType(queryType: string): SqlDetailBean {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withResponseLength(responseLength: number): SqlDetailBean {
        this['response_length'] = responseLength;
        return this;
    }
    public set responseLength(responseLength: number  | undefined) {
        this['response_length'] = responseLength;
    }
    public get responseLength(): number | undefined {
        return this['response_length'];
    }
    public withResponseStatus(responseStatus: string): SqlDetailBean {
        this['response_status'] = responseStatus;
        return this;
    }
    public set responseStatus(responseStatus: string  | undefined) {
        this['response_status'] = responseStatus;
    }
    public get responseStatus(): string | undefined {
        return this['response_status'];
    }
    public withRuleId(ruleId: string): SqlDetailBean {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): SqlDetailBean {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: string): SqlDetailBean {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withSchema(schema: string): SqlDetailBean {
        this['schema'] = schema;
        return this;
    }
    public withScopeId(scopeId: string): SqlDetailBean {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
    public withScopeName(scopeName: string): SqlDetailBean {
        this['scope_name'] = scopeName;
        return this;
    }
    public set scopeName(scopeName: string  | undefined) {
        this['scope_name'] = scopeName;
    }
    public get scopeName(): string | undefined {
        return this['scope_name'];
    }
    public withSqlResponse(sqlResponse: string): SqlDetailBean {
        this['sql_response'] = sqlResponse;
        return this;
    }
    public set sqlResponse(sqlResponse: string  | undefined) {
        this['sql_response'] = sqlResponse;
    }
    public get sqlResponse(): string | undefined {
        return this['sql_response'];
    }
    public withSqlResult(sqlResult: string): SqlDetailBean {
        this['sql_result'] = sqlResult;
        return this;
    }
    public set sqlResult(sqlResult: string  | undefined) {
        this['sql_result'] = sqlResult;
    }
    public get sqlResult(): string | undefined {
        return this['sql_result'];
    }
    public withSqlStatement(sqlStatement: string): SqlDetailBean {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withStartTime(startTime: string): SqlDetailBean {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTcpSessionId(tcpSessionId: string): SqlDetailBean {
        this['tcp_session_id'] = tcpSessionId;
        return this;
    }
    public set tcpSessionId(tcpSessionId: string  | undefined) {
        this['tcp_session_id'] = tcpSessionId;
    }
    public get tcpSessionId(): string | undefined {
        return this['tcp_session_id'];
    }
}