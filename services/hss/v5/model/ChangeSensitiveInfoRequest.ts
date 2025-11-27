import { ChangeSensitiveInfoRequestInfo } from './ChangeSensitiveInfoRequestInfo';


export class ChangeSensitiveInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'image_type'?: string;
    public body?: ChangeSensitiveInfoRequestInfo;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeSensitiveInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageType(imageType: string): ChangeSensitiveInfoRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withBody(body: ChangeSensitiveInfoRequestInfo): ChangeSensitiveInfoRequest {
        this['body'] = body;
        return this;
    }
}