import { InstanceDetail } from './InstanceDetail';
import { ResourceTag } from './ResourceTag';


export class Resources {
    private 'resource_id'?: string;
    private 'resource_detail'?: InstanceDetail;
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    private 'resource_name'?: string;
    public constructor(resourceId?: string, resourceDetail?: InstanceDetail, tags?: Array<ResourceTag>, sysTags?: Array<ResourceTag>, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
        this['sys_tags'] = sysTags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): Resources {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: InstanceDetail): Resources {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: InstanceDetail  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): InstanceDetail | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTag>): Resources {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): Resources {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
    public withResourceName(resourceName: string): Resources {
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