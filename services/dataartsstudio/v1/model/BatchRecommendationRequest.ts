import { Recommendation } from './Recommendation';


export class BatchRecommendationRequest {
    public recommendations?: Array<Recommendation>;
    public guids?: Array<string>;
    private 'add_type'?: string;
    public constructor() { 
    }
    public withRecommendations(recommendations: Array<Recommendation>): BatchRecommendationRequest {
        this['recommendations'] = recommendations;
        return this;
    }
    public withGuids(guids: Array<string>): BatchRecommendationRequest {
        this['guids'] = guids;
        return this;
    }
    public withAddType(addType: string): BatchRecommendationRequest {
        this['add_type'] = addType;
        return this;
    }
    public set addType(addType: string  | undefined) {
        this['add_type'] = addType;
    }
    public get addType(): string | undefined {
        return this['add_type'];
    }
}