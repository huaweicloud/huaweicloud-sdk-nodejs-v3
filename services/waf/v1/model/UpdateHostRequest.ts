import { UpdateHostRequestBody } from './UpdateHostRequestBody';


export class UpdateHostRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'instance_id': string | undefined;
    public body?: UpdateHostRequestBody;
    public constructor(contentType?: any, instanceId?: any) { 
        this['Content-Type'] = contentType;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): UpdateHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withInstanceId(instanceId: string): UpdateHostRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: UpdateHostRequestBody): UpdateHostRequest {
        this['body'] = body;
        return this;
    }
}