import { ResourceInstanceResponseSysTags } from './ResourceInstanceResponseSysTags';
import { ResourceInstanceResponseTags } from './ResourceInstanceResponseTags';


export class ResourceInstanceResponseResources {
    private 'resource_detail'?: object;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<ResourceInstanceResponseTags>;
    private 'sys_tags'?: Array<ResourceInstanceResponseSysTags>;
    public constructor(resourceDetail?: object, resourceId?: string, resourceName?: string, tags?: Array<ResourceInstanceResponseTags>) { 
        this['resource_detail'] = resourceDetail;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['tags'] = tags;
    }
    public withResourceDetail(resourceDetail: object): ResourceInstanceResponseResources {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withResourceId(resourceId: string): ResourceInstanceResponseResources {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceInstanceResponseResources {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceInstanceResponseTags>): ResourceInstanceResponseResources {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceInstanceResponseSysTags>): ResourceInstanceResponseResources {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceInstanceResponseSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceInstanceResponseSysTags> | undefined {
        return this['sys_tags'];
    }
}