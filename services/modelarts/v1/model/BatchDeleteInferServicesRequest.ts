import { DeleteServicesRequest } from './DeleteServicesRequest';


export class BatchDeleteInferServicesRequest {
    public body?: DeleteServicesRequest;
    public constructor() { 
    }
    public withBody(body: DeleteServicesRequest): BatchDeleteInferServicesRequest {
        this['body'] = body;
        return this;
    }
}