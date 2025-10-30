import { QueryVpcCondition } from './QueryVpcCondition';


export class ShowEndpointStatusRequest {
    public body?: QueryVpcCondition;
    public constructor() { 
    }
    public withBody(body: QueryVpcCondition): ShowEndpointStatusRequest {
        this['body'] = body;
        return this;
    }
}