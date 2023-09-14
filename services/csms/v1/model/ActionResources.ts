import { Secret } from './Secret';
import { TagItem } from './TagItem';


export class ActionResources {
    private 'resource_id'?: string;
    private 'resource_detail'?: Secret;
    private 'resource_name'?: string;
    public tags?: Array<TagItem>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ActionResources {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: Secret): ActionResources {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: Secret  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): Secret | undefined {
        return this['resource_detail'];
    }
    public withResourceName(resourceName: string): ActionResources {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<TagItem>): ActionResources {
        this['tags'] = tags;
        return this;
    }
}