import { PublicResourceTag } from './PublicResourceTag';


export class PublicResource {
    private 'resource_id'?: string;
    private 'resource_detail'?: object;
    public tags?: Array<PublicResourceTag>;
    private 'resource_name'?: string;
    public constructor(resourceId?: string, resourceDetail?: object, tags?: Array<PublicResourceTag>, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): PublicResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: object): PublicResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<PublicResourceTag>): PublicResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): PublicResource {
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