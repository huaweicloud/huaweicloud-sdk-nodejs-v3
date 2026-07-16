import { HyperClusterCreateRequest } from './HyperClusterCreateRequest';


export class CreateHyperClusterRequest {
    public body?: HyperClusterCreateRequest;
    public constructor() { 
    }
    public withBody(body: HyperClusterCreateRequest): CreateHyperClusterRequest {
        this['body'] = body;
        return this;
    }
}