import { TagPlain } from './TagPlain';


export class MRSResource {
    private 'resource_id'?: string | undefined;
    private 'resource_detail'?: string | undefined;
    public tags?: Array<TagPlain>;
    private 'resource_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): MRSResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: string): MRSResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withTags(tags: Array<TagPlain>): MRSResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): MRSResource {
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