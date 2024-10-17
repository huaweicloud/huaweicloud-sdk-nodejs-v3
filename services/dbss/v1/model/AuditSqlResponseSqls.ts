import { AuditSqlResponseSql } from './AuditSqlResponseSql';


export class AuditSqlResponseSqls {
    public sql?: AuditSqlResponseSql;
    public constructor(sql?: AuditSqlResponseSql) { 
        this['sql'] = sql;
    }
    public withSql(sql: AuditSqlResponseSql): AuditSqlResponseSqls {
        this['sql'] = sql;
        return this;
    }
}