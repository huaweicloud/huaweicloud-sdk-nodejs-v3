import { UpdateIpGroupRequestBody } from './UpdateIpGroupRequestBody';


export class UpdateIpGroupRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public id?: string;
    public action?: string;
    public body?: UpdateIpGroupRequestBody;
    public constructor(contentType?: string, id?: string) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): UpdateIpGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateIpGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): UpdateIpGroupRequest {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): UpdateIpGroupRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: UpdateIpGroupRequestBody): UpdateIpGroupRequest {
        this['body'] = body;
        return this;
    }
}