import { NoSqlModiflyEpsQuotasRequestBody } from './NoSqlModiflyEpsQuotasRequestBody';


export class ModifyEpsQuotasRequest {
    public body?: NoSqlModiflyEpsQuotasRequestBody;
    public constructor() { 
    }
    public withBody(body: NoSqlModiflyEpsQuotasRequestBody): ModifyEpsQuotasRequest {
        this['body'] = body;
        return this;
    }
}