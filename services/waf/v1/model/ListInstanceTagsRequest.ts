

export class ListInstanceTagsRequest {
    private 'Content-Type'?: string;
    private 'resource_type'?: ListInstanceTagsRequestResourceTypeEnum | string;
    public resourceid?: string;
    private 'enterprise_project_id'?: string;
    public constructor(contentType?: string, resourceType?: string, resourceid?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
        this['resourceid'] = resourceid;
    }
    public withContentType(contentType: string): ListInstanceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: ListInstanceTagsRequestResourceTypeEnum | string): ListInstanceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListInstanceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListInstanceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceid(resourceid: string): ListInstanceTagsRequest {
        this['resourceid'] = resourceid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceTagsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceTagsRequestResourceTypeEnum {
    WAF = 'waf',
    WAF_INSTANCE = 'waf-instance'
}
