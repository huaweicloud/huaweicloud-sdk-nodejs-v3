import { Secret } from './Secret';
import { TagItem } from './TagItem';


export class ActionResources {
    private 'resource_id'?: string | undefined;
    private 'resource_detail'?: Secret | undefined;
    private 'resource_name'?: string | undefined;
    public tags?: Array<TagItem>;
    private 'sys_tags'?: Array<TagItem> | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ActionResources {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: Secret): ActionResources {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: Secret | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withResourceName(resourceName: string): ActionResources {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withTags(tags: Array<TagItem>): ActionResources {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TagItem>): ActionResources {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagItem> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
}