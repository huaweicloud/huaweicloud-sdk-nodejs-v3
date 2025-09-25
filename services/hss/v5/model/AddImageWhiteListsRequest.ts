import { AddImageWhiteListsRequestBody } from './AddImageWhiteListsRequestBody';


export class AddImageWhiteListsRequest {
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public type?: string;
    public body?: AddImageWhiteListsRequestBody;
    public constructor(globalImageType?: string, type?: string) { 
        this['global_image_type'] = globalImageType;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddImageWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): AddImageWhiteListsRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: string): AddImageWhiteListsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: AddImageWhiteListsRequestBody): AddImageWhiteListsRequest {
        this['body'] = body;
        return this;
    }
}