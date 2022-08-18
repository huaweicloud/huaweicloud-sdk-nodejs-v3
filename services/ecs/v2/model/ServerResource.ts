import { ResourceTag } from './ResourceTag';


export class ServerResource {
    private 'resource_id': string | undefined;
    private 'resource_detail': string | undefined;
    public tags: Array<ResourceTag>;
    private 'resource_name': string | undefined;
    public constructor(resourceId?: any, resourceDetail?: any, tags?: any, resourceName?: any) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): ServerResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: string): ServerResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTag>): ServerResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): ServerResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
}