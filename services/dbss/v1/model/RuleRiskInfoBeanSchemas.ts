

export class RuleRiskInfoBeanSchemas {
    public schema?: string;
    public table?: string;
    public column?: string;
    public constructor() { 
    }
    public withSchema(schema: string): RuleRiskInfoBeanSchemas {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): RuleRiskInfoBeanSchemas {
        this['table'] = table;
        return this;
    }
    public withColumn(column: string): RuleRiskInfoBeanSchemas {
        this['column'] = column;
        return this;
    }
}