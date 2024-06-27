

export class ReplayErrorSqlTemplateResp {
    private 'sql_template'?: string;
    private 'sql_template_md5'?: string;
    private 'target_name'?: string;
    private 'schema_name'?: string;
    private 'query_type'?: string;
    private 'target_type'?: string;
    public count?: number;
    public constructor() { 
    }
    public withSqlTemplate(sqlTemplate: string): ReplayErrorSqlTemplateResp {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withSqlTemplateMd5(sqlTemplateMd5: string): ReplayErrorSqlTemplateResp {
        this['sql_template_md5'] = sqlTemplateMd5;
        return this;
    }
    public set sqlTemplateMd5(sqlTemplateMd5: string  | undefined) {
        this['sql_template_md5'] = sqlTemplateMd5;
    }
    public get sqlTemplateMd5(): string | undefined {
        return this['sql_template_md5'];
    }
    public withTargetName(targetName: string): ReplayErrorSqlTemplateResp {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withSchemaName(schemaName: string): ReplayErrorSqlTemplateResp {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withQueryType(queryType: string): ReplayErrorSqlTemplateResp {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withTargetType(targetType: string): ReplayErrorSqlTemplateResp {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withCount(count: number): ReplayErrorSqlTemplateResp {
        this['count'] = count;
        return this;
    }
}