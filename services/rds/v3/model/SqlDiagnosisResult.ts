

export class SqlDiagnosisResult {
    public id?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    private 'start_time'?: number;
    public sql?: string;
    public constructor() { 
    }
    public withId(id: number): SqlDiagnosisResult {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): SqlDiagnosisResult {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): SqlDiagnosisResult {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): SqlDiagnosisResult {
        this['db'] = db;
        return this;
    }
    public withStartTime(startTime: number): SqlDiagnosisResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withSql(sql: string): SqlDiagnosisResult {
        this['sql'] = sql;
        return this;
    }
}