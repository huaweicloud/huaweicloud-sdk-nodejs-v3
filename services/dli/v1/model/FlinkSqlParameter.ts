

export class FlinkSqlParameter {
    private 'sql_body'?: string;
    private 'dependency_jars'?: string;
    public constructor() { 
    }
    public withSqlBody(sqlBody: string): FlinkSqlParameter {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withDependencyJars(dependencyJars: string): FlinkSqlParameter {
        this['dependency_jars'] = dependencyJars;
        return this;
    }
    public set dependencyJars(dependencyJars: string  | undefined) {
        this['dependency_jars'] = dependencyJars;
    }
    public get dependencyJars(): string | undefined {
        return this['dependency_jars'];
    }
}