import { ResourceTag } from './ResourceTag';


export class ListResourceResp {
    private 'resource_detail'?: object;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(resourceDetail?: object, resourceId?: string, resourceName?: string) { 
        this['resource_detail'] = resourceDetail;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
    }
    public withResourceDetail(resourceDetail: object): ListResourceResp {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withResourceId(resourceId: string): ListResourceResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListResourceResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTag>): ListResourceResp {
        this['tags'] = tags;
        return this;
    }
}