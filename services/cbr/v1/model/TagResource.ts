import { SysTag } from './SysTag';
import { Tag } from './Tag';
import { Vault } from './Vault';


export class TagResource {
    private 'resource_id': string | undefined;
    private 'resource_detail': Array<Vault> | undefined;
    public tags: Array<Tag>;
    private 'resource_name': string | undefined;
    private 'sys_tags': Array<SysTag> | undefined;
    public constructor(resourceId?: any, resourceDetail?: any, tags?: any, resourceName?: any, sysTags?: any) { 
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
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: Array<Vault>): TagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: Array<Vault> | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
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
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withSysTags(sysTags: Array<SysTag>): TagResource {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
}