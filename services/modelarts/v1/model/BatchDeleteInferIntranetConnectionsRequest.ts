import { IntranetConnectionDeleteRequest } from './IntranetConnectionDeleteRequest';


export class BatchDeleteInferIntranetConnectionsRequest {
    public body?: IntranetConnectionDeleteRequest;
    public constructor() { 
    }
    public withBody(body: IntranetConnectionDeleteRequest): BatchDeleteInferIntranetConnectionsRequest {
        this['body'] = body;
        return this;
    }
}