import { BatchRecommendationRequest } from './BatchRecommendationRequest';


export class BatchTagRequest {
    public instance?: string;
    public body?: BatchRecommendationRequest;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): BatchTagRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: BatchRecommendationRequest): BatchTagRequest {
        this['body'] = body;
        return this;
    }
}