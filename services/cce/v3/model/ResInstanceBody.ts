import { ResourceTagBody } from './ResourceTagBody';


export class ResInstanceBody {
    private 'resource_id'?: string;
    private 'resource_detail'?: object;
    public tags?: Array<ResourceTagBody>;
    private 'sys_tags'?: Array<ResourceTagBody>;
    private 'resource_name'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResInstanceBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: object): ResInstanceBody {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTagBody>): ResInstanceBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagBody>): ResInstanceBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagBody>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagBody> | undefined {
        return this['sys_tags'];
    }
    public withResourceName(resourceName: string): ResInstanceBody {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}