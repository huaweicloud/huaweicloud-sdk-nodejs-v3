import { UpdateLtsInfoConfigRequestBody } from './UpdateLtsInfoConfigRequestBody';


export class UpdateLtsInfoConfigRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'ltsconfig_id'?: string;
    public body?: UpdateLtsInfoConfigRequestBody;
    public constructor(contentType?: string, ltsconfigId?: string) { 
        this['Content-Type'] = contentType;
        this['ltsconfig_id'] = ltsconfigId;
    }
    public withContentType(contentType: string): UpdateLtsInfoConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateLtsInfoConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLtsconfigId(ltsconfigId: string): UpdateLtsInfoConfigRequest {
        this['ltsconfig_id'] = ltsconfigId;
        return this;
    }
    public set ltsconfigId(ltsconfigId: string  | undefined) {
        this['ltsconfig_id'] = ltsconfigId;
    }
    public get ltsconfigId(): string | undefined {
        return this['ltsconfig_id'];
    }
    public withBody(body: UpdateLtsInfoConfigRequestBody): UpdateLtsInfoConfigRequest {
        this['body'] = body;
        return this;
    }
}