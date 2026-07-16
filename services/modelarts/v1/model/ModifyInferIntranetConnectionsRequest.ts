import { IntranetConnectionModifyRequest } from './IntranetConnectionModifyRequest';


export class ModifyInferIntranetConnectionsRequest {
    public id?: string;
    public body?: IntranetConnectionModifyRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ModifyInferIntranetConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: IntranetConnectionModifyRequest): ModifyInferIntranetConnectionsRequest {
        this['body'] = body;
        return this;
    }
}