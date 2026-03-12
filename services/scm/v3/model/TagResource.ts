import { ScsResourceTag } from './ScsResourceTag';
import { TagResourceResourceDetail } from './TagResourceResourceDetail';


export class TagResource {
    private 'resource_id'?: string;
    public tags?: Array<ScsResourceTag>;
    private 'resource_name'?: string;
    private 'resource_detail'?: TagResourceResourceDetail;
    public constructor() { 
    }
    public withResourceId(resourceId: string): TagResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<ScsResourceTag>): TagResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): TagResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: TagResourceResourceDetail): TagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: TagResourceResourceDetail  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): TagResourceResourceDetail | undefined {
        return this['resource_detail'];
    }
}