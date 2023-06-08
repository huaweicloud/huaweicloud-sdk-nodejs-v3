import { ListFunctionResult } from './ListFunctionResult';


export class ListEnterpriseResourceResult {
    private 'resource_id'?: string | undefined;
    private 'resource_detail'?: ListFunctionResult | undefined;
    public tags?: Array<{ [key: string]: string; }>;
    private 'sys_tags'?: Array<{ [key: string]: string; }> | undefined;
    private 'resource_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ListEnterpriseResourceResult {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: ListFunctionResult): ListEnterpriseResourceResult {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: ListFunctionResult | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withTags(tags: Array<{ [key: string]: string; }>): ListEnterpriseResourceResult {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<{ [key: string]: string; }>): ListEnterpriseResourceResult {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<{ [key: string]: string; }> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
    public withResourceName(resourceName: string): ListEnterpriseResourceResult {
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