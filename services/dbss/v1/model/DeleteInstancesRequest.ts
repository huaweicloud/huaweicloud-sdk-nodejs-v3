import { DeleteInstanceDemandRequest } from './DeleteInstanceDemandRequest';


export class DeleteInstancesRequest {
    public body?: DeleteInstanceDemandRequest;
    public constructor() { 
    }
    public withBody(body: DeleteInstanceDemandRequest): DeleteInstancesRequest {
        this['body'] = body;
        return this;
    }
}