import { UpdateIpGroupRequestBody } from './UpdateIpGroupRequestBody';


export class UpdateIpGroupRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public id: string;
    public body?: UpdateIpGroupRequestBody;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): UpdateIpGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateIpGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withId(id: string): UpdateIpGroupRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateIpGroupRequestBody): UpdateIpGroupRequest {
        this['body'] = body;
        return this;
    }
}