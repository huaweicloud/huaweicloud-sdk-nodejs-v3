import { QueryTestItemTreeInfo } from './QueryTestItemTreeInfo';


export class ShowFeatureChildrenRequest {
    private 'feature_id'?: string;
    public body?: QueryTestItemTreeInfo;
    public constructor(featureId?: string) { 
        this['feature_id'] = featureId;
    }
    public withFeatureId(featureId: string): ShowFeatureChildrenRequest {
        this['feature_id'] = featureId;
        return this;
    }
    public set featureId(featureId: string  | undefined) {
        this['feature_id'] = featureId;
    }
    public get featureId(): string | undefined {
        return this['feature_id'];
    }
    public withBody(body: QueryTestItemTreeInfo): ShowFeatureChildrenRequest {
        this['body'] = body;
        return this;
    }
}