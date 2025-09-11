import { DeleteInstanceDemandRequest } from './DeleteInstanceDemandRequest';


export class DeleteInstancesNewRequest {
    public body?: DeleteInstanceDemandRequest;
    public constructor() { 
    }
    public withBody(body: DeleteInstanceDemandRequest): DeleteInstancesNewRequest {
        this['body'] = body;
        return this;
    }
}