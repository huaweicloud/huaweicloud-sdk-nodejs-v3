import { UpdateCodeGateRequestBody } from './UpdateCodeGateRequestBody';


export class UpdateCodeGateRequest {
    public operator?: string;
    public body?: UpdateCodeGateRequestBody;
    public constructor() { 
    }
    public withOperator(operator: string): UpdateCodeGateRequest {
        this['operator'] = operator;
        return this;
    }
    public withBody(body: UpdateCodeGateRequestBody): UpdateCodeGateRequest {
        this['body'] = body;
        return this;
    }
}