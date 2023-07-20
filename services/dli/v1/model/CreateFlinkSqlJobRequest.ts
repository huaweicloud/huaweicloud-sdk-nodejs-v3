import { CreateFlinkSqlJobRequestBody } from './CreateFlinkSqlJobRequestBody';


export class CreateFlinkSqlJobRequest {
    public body?: CreateFlinkSqlJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkSqlJobRequestBody): CreateFlinkSqlJobRequest {
        this['body'] = body;
        return this;
    }
}