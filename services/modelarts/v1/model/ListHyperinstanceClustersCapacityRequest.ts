import { HyperinstanceClustersCapacityRequest } from './HyperinstanceClustersCapacityRequest';


export class ListHyperinstanceClustersCapacityRequest {
    public body?: HyperinstanceClustersCapacityRequest;
    public constructor() { 
    }
    public withBody(body: HyperinstanceClustersCapacityRequest): ListHyperinstanceClustersCapacityRequest {
        this['body'] = body;
        return this;
    }
}