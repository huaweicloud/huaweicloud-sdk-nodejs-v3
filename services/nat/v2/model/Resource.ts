import { ResourceTag } from './ResourceTag';


export class Resource {
    private 'resource_detail'?: object;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_tag'?: Array<ResourceTag>;
    public constructor(resourceDetail?: object, resourceId?: string, resourceName?: string, resourceTag?: Array<ResourceTag>) { 
        this['resource_detail'] = resourceDetail;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_tag'] = resourceTag;
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
    public withResourceTag(resourceTag: Array<ResourceTag>): Resource {
        this['resource_tag'] = resourceTag;
        return this;
    }
    public set resourceTag(resourceTag: Array<ResourceTag>  | undefined) {
        this['resource_tag'] = resourceTag;
    }
    public get resourceTag(): Array<ResourceTag> | undefined {
        return this['resource_tag'];
    }
}