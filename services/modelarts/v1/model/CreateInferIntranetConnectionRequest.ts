import { IntranetConnectionRequest } from './IntranetConnectionRequest';


export class CreateInferIntranetConnectionRequest {
    public body?: IntranetConnectionRequest;
    public constructor() { 
    }
    public withBody(body: IntranetConnectionRequest): CreateInferIntranetConnectionRequest {
        this['body'] = body;
        return this;
    }
}