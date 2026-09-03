import { CountResourceInstancesReq } from './CountResourceInstancesReq';


export class CountTrainingJobsByTagsRequest {
    public limit?: number;
    public offset?: number;
    public body?: CountResourceInstancesReq;
    public constructor() { 
    }
    public withLimit(limit: number): CountTrainingJobsByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): CountTrainingJobsByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: CountResourceInstancesReq): CountTrainingJobsByTagsRequest {
        this['body'] = body;
        return this;
    }
}