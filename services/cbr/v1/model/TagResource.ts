import { InstancesResourceDetail } from './InstancesResourceDetail';
import { SysTag } from './SysTag';
import { Tag } from './Tag';


export class TagResource {
    private 'resource_id'?: string;
    private 'resource_detail'?: InstancesResourceDetail;
    public tags?: Array<Tag>;
    private 'resource_name'?: string;
    private 'sys_tags'?: Array<SysTag>;
    public constructor(resourceId?: string, resourceDetail?: InstancesResourceDetail, tags?: Array<Tag>, resourceName?: string, sysTags?: Array<SysTag>) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
        this['sys_tags'] = sysTags;
    }
    public withResourceId(resourceId: string): TagResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: InstancesResourceDetail): TagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: InstancesResourceDetail  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): InstancesResourceDetail | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<Tag>): TagResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): TagResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withSysTags(sysTags: Array<SysTag>): TagResource {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTag> | undefined {
        return this['sys_tags'];
    }
}