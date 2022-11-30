import { CreateHostRequestBody } from './CreateHostRequestBody';


export class CreateHostRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: CreateHostRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateHostRequestBody): CreateHostRequest {
        this['body'] = body;
        return this;
    }
}