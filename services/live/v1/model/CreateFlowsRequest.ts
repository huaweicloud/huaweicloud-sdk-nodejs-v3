import { CreateFlowsRequestBody } from './CreateFlowsRequestBody';


export class CreateFlowsRequest {
    public body?: CreateFlowsRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlowsRequestBody): CreateFlowsRequest {
        this['body'] = body;
        return this;
    }
}