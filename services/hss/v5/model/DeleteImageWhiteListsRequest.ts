import { DeleteImageWhiteListsRequestBody } from './DeleteImageWhiteListsRequestBody';


export class DeleteImageWhiteListsRequest {
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public type?: string;
    public body?: DeleteImageWhiteListsRequestBody;
    public constructor(globalImageType?: string, type?: string) { 
        this['global_image_type'] = globalImageType;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteImageWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): DeleteImageWhiteListsRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: string): DeleteImageWhiteListsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: DeleteImageWhiteListsRequestBody): DeleteImageWhiteListsRequest {
        this['body'] = body;
        return this;
    }
}