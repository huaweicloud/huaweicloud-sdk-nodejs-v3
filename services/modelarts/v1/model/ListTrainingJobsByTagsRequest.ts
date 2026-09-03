import { ResourceInstancesFilterReq } from './ResourceInstancesFilterReq';


export class ListTrainingJobsByTagsRequest {
    public limit?: number;
    public offset?: number;
    public body?: ResourceInstancesFilterReq;
    public constructor() { 
    }
    public withLimit(limit: number): ListTrainingJobsByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingJobsByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ResourceInstancesFilterReq): ListTrainingJobsByTagsRequest {
        this['body'] = body;
        return this;
    }
}