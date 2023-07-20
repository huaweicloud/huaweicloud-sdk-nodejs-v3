import { VolumeDetailForTag } from './VolumeDetailForTag';


export class Resource {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_detail'?: VolumeDetailForTag;
    public tags?: Array<{ [key: string]: string; }>;
    public constructor(resourceId?: string, resourceDetail?: VolumeDetailForTag, tags?: Array<{ [key: string]: string; }>) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
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
    public withResourceDetail(resourceDetail: VolumeDetailForTag): Resource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: VolumeDetailForTag  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): VolumeDetailForTag | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<{ [key: string]: string; }>): Resource {
        this['tags'] = tags;
        return this;
    }
}