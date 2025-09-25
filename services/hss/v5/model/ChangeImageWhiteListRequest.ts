import { ChangeImageWhiteListRequestBody } from './ChangeImageWhiteListRequestBody';


export class ChangeImageWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public id?: string;
    private 'global_image_type'?: string;
    public type?: string;
    public body?: ChangeImageWhiteListRequestBody;
    public constructor(id?: string, globalImageType?: string, type?: string) { 
        this['id'] = id;
        this['global_image_type'] = globalImageType;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeImageWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): ChangeImageWhiteListRequest {
        this['id'] = id;
        return this;
    }
    public withGlobalImageType(globalImageType: string): ChangeImageWhiteListRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: string): ChangeImageWhiteListRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: ChangeImageWhiteListRequestBody): ChangeImageWhiteListRequest {
        this['body'] = body;
        return this;
    }
}