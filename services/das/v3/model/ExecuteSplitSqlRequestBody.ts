

export class ExecuteSplitSqlRequestBody {
    private 'sql_script'?: string;
    public constructor(sqlScript?: string) { 
        this['sql_script'] = sqlScript;
    }
    public withSqlScript(sqlScript: string): ExecuteSplitSqlRequestBody {
        this['sql_script'] = sqlScript;
        return this;
    }
    public set sqlScript(sqlScript: string  | undefined) {
        this['sql_script'] = sqlScript;
    }
    public get sqlScript(): string | undefined {
        return this['sql_script'];
    }
}