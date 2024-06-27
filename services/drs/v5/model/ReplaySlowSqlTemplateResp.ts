

export class ReplaySlowSqlTemplateResp {
    private 'sql_template'?: string;
    private 'sql_template_md5'?: string;
    private 'target_name'?: string;
    private 'schema_name'?: string;
    private 'query_type'?: string;
    private 'min_latency'?: number;
    private 'max_latency'?: number;
    private 'avg_latency'?: number;
    private 'total_latency'?: number;
    private 'target_type'?: string;
    public count?: number;
    public constructor(sqlTemplate?: string, avgLatency?: number, count?: number) { 
        this['sql_template'] = sqlTemplate;
        this['avg_latency'] = avgLatency;
        this['count'] = count;
    }
    public withSqlTemplate(sqlTemplate: string): ReplaySlowSqlTemplateResp {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withSqlTemplateMd5(sqlTemplateMd5: string): ReplaySlowSqlTemplateResp {
        this['sql_template_md5'] = sqlTemplateMd5;
        return this;
    }
    public set sqlTemplateMd5(sqlTemplateMd5: string  | undefined) {
        this['sql_template_md5'] = sqlTemplateMd5;
    }
    public get sqlTemplateMd5(): string | undefined {
        return this['sql_template_md5'];
    }
    public withTargetName(targetName: string): ReplaySlowSqlTemplateResp {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withSchemaName(schemaName: string): ReplaySlowSqlTemplateResp {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withQueryType(queryType: string): ReplaySlowSqlTemplateResp {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withMinLatency(minLatency: number): ReplaySlowSqlTemplateResp {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
    public withMaxLatency(maxLatency: number): ReplaySlowSqlTemplateResp {
        this['max_latency'] = maxLatency;
        return this;
    }
    public set maxLatency(maxLatency: number  | undefined) {
        this['max_latency'] = maxLatency;
    }
    public get maxLatency(): number | undefined {
        return this['max_latency'];
    }
    public withAvgLatency(avgLatency: number): ReplaySlowSqlTemplateResp {
        this['avg_latency'] = avgLatency;
        return this;
    }
    public set avgLatency(avgLatency: number  | undefined) {
        this['avg_latency'] = avgLatency;
    }
    public get avgLatency(): number | undefined {
        return this['avg_latency'];
    }
    public withTotalLatency(totalLatency: number): ReplaySlowSqlTemplateResp {
        this['total_latency'] = totalLatency;
        return this;
    }
    public set totalLatency(totalLatency: number  | undefined) {
        this['total_latency'] = totalLatency;
    }
    public get totalLatency(): number | undefined {
        return this['total_latency'];
    }
    public withTargetType(targetType: string): ReplaySlowSqlTemplateResp {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withCount(count: number): ReplaySlowSqlTemplateResp {
        this['count'] = count;
        return this;
    }
}