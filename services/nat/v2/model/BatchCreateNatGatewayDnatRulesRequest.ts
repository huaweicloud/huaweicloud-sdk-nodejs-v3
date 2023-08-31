import { BatchCreateNatGatewayDnatRulesRequestBody } from './BatchCreateNatGatewayDnatRulesRequestBody';


export class BatchCreateNatGatewayDnatRulesRequest {
    public body?: BatchCreateNatGatewayDnatRulesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateNatGatewayDnatRulesRequestBody): BatchCreateNatGatewayDnatRulesRequest {
        this['body'] = body;
        return this;
    }
}