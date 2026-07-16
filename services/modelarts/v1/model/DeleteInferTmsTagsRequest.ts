import { TmsTagForDeletion } from './TmsTagForDeletion';


export class DeleteInferTmsTagsRequest {
    public tags?: Array<TmsTagForDeletion>;
    private 'resource_id'?: string;
    public constructor(tags?: Array<TmsTagForDeletion>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TmsTagForDeletion>): DeleteInferTmsTagsRequest {
        this['tags'] = tags;
        return this;
    }
    public withResourceId(resourceId: string): DeleteInferTmsTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}