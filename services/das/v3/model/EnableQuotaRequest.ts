import { EnableQuotaRequestBody } from './EnableQuotaRequestBody';


export class EnableQuotaRequest {
    public body?: EnableQuotaRequestBody;
    public constructor() { 
    }
    public withBody(body: EnableQuotaRequestBody): EnableQuotaRequest {
        this['body'] = body;
        return this;
    }
}