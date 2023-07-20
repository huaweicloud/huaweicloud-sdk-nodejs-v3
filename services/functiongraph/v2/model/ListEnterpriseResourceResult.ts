import { KvItem } from './KvItem';
import { ListFunctionResult } from './ListFunctionResult';


export class ListEnterpriseResourceResult {
    private 'resource_id'?: string;
    private 'resource_detail'?: ListFunctionResult;
    public tags?: Array<KvItem>;
    private 'sys_tags'?: Array<KvItem>;
    private 'resource_name'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ListEnterpriseResourceResult {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: ListFunctionResult): ListEnterpriseResourceResult {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: ListFunctionResult  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): ListFunctionResult | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<KvItem>): ListEnterpriseResourceResult {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<KvItem>): ListEnterpriseResourceResult {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<KvItem>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<KvItem> | undefined {
        return this['sys_tags'];
    }
    public withResourceName(resourceName: string): ListEnterpriseResourceResult {
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