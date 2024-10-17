import { AuditSqlRequestTime } from './AuditSqlRequestTime';


export class AuditSqlRequest {
    public time?: AuditSqlRequestTime;
    private 'risk_levels'?: AuditSqlRequestRiskLevelsEnum | string;
    private 'client_ip'?: string;
    private 'client_name'?: string;
    private 'db_ip'?: string;
    private 'db_user'?: string;
    private 'query_type'?: string;
    private 'rule_name'?: string;
    private 'sql_statement'?: string;
    private 'sql_response'?: string;
    public page?: number;
    public size?: number;
    private 'time_order'?: string;
    public constructor(time?: AuditSqlRequestTime) { 
        this['time'] = time;
    }
    public withTime(time: AuditSqlRequestTime): AuditSqlRequest {
        this['time'] = time;
        return this;
    }
    public withRiskLevels(riskLevels: AuditSqlRequestRiskLevelsEnum | string): AuditSqlRequest {
        this['risk_levels'] = riskLevels;
        return this;
    }
    public set riskLevels(riskLevels: AuditSqlRequestRiskLevelsEnum | string  | undefined) {
        this['risk_levels'] = riskLevels;
    }
    public get riskLevels(): AuditSqlRequestRiskLevelsEnum | string | undefined {
        return this['risk_levels'];
    }
    public withClientIp(clientIp: string): AuditSqlRequest {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientName(clientName: string): AuditSqlRequest {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withDbIp(dbIp: string): AuditSqlRequest {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbUser(dbUser: string): AuditSqlRequest {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withQueryType(queryType: string): AuditSqlRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withRuleName(ruleName: string): AuditSqlRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSqlStatement(sqlStatement: string): AuditSqlRequest {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withSqlResponse(sqlResponse: string): AuditSqlRequest {
        this['sql_response'] = sqlResponse;
        return this;
    }
    public set sqlResponse(sqlResponse: string  | undefined) {
        this['sql_response'] = sqlResponse;
    }
    public get sqlResponse(): string | undefined {
        return this['sql_response'];
    }
    public withPage(page: number): AuditSqlRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): AuditSqlRequest {
        this['size'] = size;
        return this;
    }
    public withTimeOrder(timeOrder: string): AuditSqlRequest {
        this['time_order'] = timeOrder;
        return this;
    }
    public set timeOrder(timeOrder: string  | undefined) {
        this['time_order'] = timeOrder;
    }
    public get timeOrder(): string | undefined {
        return this['time_order'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuditSqlRequestRiskLevelsEnum {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    NO_RISK = 'NO_RISK'
}
