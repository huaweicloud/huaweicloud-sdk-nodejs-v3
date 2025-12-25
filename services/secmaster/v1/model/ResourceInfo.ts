import { Match } from './Match';


export class ResourceInfo {
    private 'resource_id'?: string;
    public tags?: Array<Match>;
    private 'sys_tags'?: Array<Match>;
    private 'resource_name'?: string;
    private 'resource_detail'?: object;
    public constructor(resourceId?: string, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): ResourceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<Match>): ResourceInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Match>): ResourceInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Match>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Match> | undefined {
        return this['sys_tags'];
    }
    public withResourceName(resourceName: string): ResourceInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: object): ResourceInfo {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
}