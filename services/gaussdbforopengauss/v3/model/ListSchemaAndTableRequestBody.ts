

export class ListSchemaAndTableRequestBody {
    private 'sql_text'?: string;
    private 'instance_id'?: string;
    public constructor(sqlText?: string, instanceId?: string) { 
        this['sql_text'] = sqlText;
        this['instance_id'] = instanceId;
    }
    public withSqlText(sqlText: string): ListSchemaAndTableRequestBody {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withInstanceId(instanceId: string): ListSchemaAndTableRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}