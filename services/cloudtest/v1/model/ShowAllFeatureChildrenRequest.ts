import { QueryTestItemTreeInfo } from './QueryTestItemTreeInfo';


export class ShowAllFeatureChildrenRequest {
    private 'feature_id'?: string;
    public body?: QueryTestItemTreeInfo;
    public constructor(featureId?: string) { 
        this['feature_id'] = featureId;
    }
    public withFeatureId(featureId: string): ShowAllFeatureChildrenRequest {
        this['feature_id'] = featureId;
        return this;
    }
    public set featureId(featureId: string  | undefined) {
        this['feature_id'] = featureId;
    }
    public get featureId(): string | undefined {
        return this['feature_id'];
    }
    public withBody(body: QueryTestItemTreeInfo): ShowAllFeatureChildrenRequest {
        this['body'] = body;
        return this;
    }
}