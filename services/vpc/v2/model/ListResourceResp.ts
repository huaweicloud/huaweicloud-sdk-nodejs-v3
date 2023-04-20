import { ResourceTag } from './ResourceTag';


export class ListResourceResp {
    private 'resource_detail': object | undefined;
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    public tags?: Array<ResourceTag>;
    public constructor(resourceDetail?: any, resourceId?: any, resourceName?: any) { 
        this['resource_detail'] = resourceDetail;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
    }
    public withResourceDetail(resourceDetail: object): ListResourceResp {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withResourceId(resourceId: string): ListResourceResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListResourceResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTag>): ListResourceResp {
        this['tags'] = tags;
        return this;
    }
}