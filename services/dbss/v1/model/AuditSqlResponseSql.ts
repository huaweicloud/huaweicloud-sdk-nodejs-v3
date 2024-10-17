import { AuditSqlResponseSqlOperatedObjInfo } from './AuditSqlResponseSqlOperatedObjInfo';


export class AuditSqlResponseSql {
    public id?: string;
    private 'sql_statement'?: string;
    private 'client_ip'?: string;
    private 'client_name'?: string;
    private 'db_ip'?: string;
    private 'db_user'?: string;
    private 'query_type'?: string;
    private 'operated_obj_info'?: Array<AuditSqlResponseSqlOperatedObjInfo>;
    private 'rule_name'?: string;
    private 'risk_level'?: string;
    private 'start_time'?: string;
    private 'sql_response'?: string;
    private 'db_instance'?: string;
    public constructor(id?: string, sqlResponse?: string) { 
        this['id'] = id;
        this['sql_response'] = sqlResponse;
    }
    public withId(id: string): AuditSqlResponseSql {
        this['id'] = id;
        return this;
    }
    public withSqlStatement(sqlStatement: string): AuditSqlResponseSql {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withClientIp(clientIp: string): AuditSqlResponseSql {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientName(clientName: string): AuditSqlResponseSql {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withDbIp(dbIp: string): AuditSqlResponseSql {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbUser(dbUser: string): AuditSqlResponseSql {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withQueryType(queryType: string): AuditSqlResponseSql {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withOperatedObjInfo(operatedObjInfo: Array<AuditSqlResponseSqlOperatedObjInfo>): AuditSqlResponseSql {
        this['operated_obj_info'] = operatedObjInfo;
        return this;
    }
    public set operatedObjInfo(operatedObjInfo: Array<AuditSqlResponseSqlOperatedObjInfo>  | undefined) {
        this['operated_obj_info'] = operatedObjInfo;
    }
    public get operatedObjInfo(): Array<AuditSqlResponseSqlOperatedObjInfo> | undefined {
        return this['operated_obj_info'];
    }
    public withRuleName(ruleName: string): AuditSqlResponseSql {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRiskLevel(riskLevel: string): AuditSqlResponseSql {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withStartTime(startTime: string): AuditSqlResponseSql {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withSqlResponse(sqlResponse: string): AuditSqlResponseSql {
        this['sql_response'] = sqlResponse;
        return this;
    }
    public set sqlResponse(sqlResponse: string  | undefined) {
        this['sql_response'] = sqlResponse;
    }
    public get sqlResponse(): string | undefined {
        return this['sql_response'];
    }
    public withDbInstance(dbInstance: string): AuditSqlResponseSql {
        this['db_instance'] = dbInstance;
        return this;
    }
    public set dbInstance(dbInstance: string  | undefined) {
        this['db_instance'] = dbInstance;
    }
    public get dbInstance(): string | undefined {
        return this['db_instance'];
    }
}