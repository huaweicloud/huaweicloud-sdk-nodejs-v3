import { ResourceTag } from './ResourceTag';


export class Resource {
    private 'resource_id'?: string;
    private 'resource_detail'?: object;
    private 'resource_name'?: string;
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): Resource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: object): Resource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withResourceName(resourceName: string): Resource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTag>): Resource {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): Resource {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
}