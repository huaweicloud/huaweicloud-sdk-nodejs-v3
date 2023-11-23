import { UpdateSqlTemplatesRequestBody } from './UpdateSqlTemplatesRequestBody';


export class UpdateSqlJobTemplateRequest {
    private 'sql_id'?: string;
    public body?: UpdateSqlTemplatesRequestBody;
    public constructor(sqlId?: string) { 
        this['sql_id'] = sqlId;
    }
    public withSqlId(sqlId: string): UpdateSqlJobTemplateRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withBody(body: UpdateSqlTemplatesRequestBody): UpdateSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}