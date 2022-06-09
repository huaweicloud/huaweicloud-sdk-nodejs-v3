import { ResourceTag } from './ResourceTag';


export class ResourcesByTag {
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    private 'resource_detail': string | undefined;
    public tags: Array<ResourceTag>;
    private 'super_resource_id'?: string | undefined;
    public constructor(resourceId?: any, resourceName?: any, resourceDetail?: any, tags?: any) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
    }
    public withResourceId(resourceId: string): ResourcesByTag {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourcesByTag {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: string): ResourcesByTag {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTag>): ResourcesByTag {
        this['tags'] = tags;
        return this;
    }
    public withSuperResourceId(superResourceId: string): ResourcesByTag {
        this['super_resource_id'] = superResourceId;
        return this;
    }
    public set superResourceId(superResourceId: string | undefined) {
        this['super_resource_id'] = superResourceId;
    }
    public get superResourceId() {
        return this['super_resource_id'];
    }
}