import { UpdatePremiumHostProtectStatusRequestBody } from './UpdatePremiumHostProtectStatusRequestBody';


export class UpdatePremiumHostProtectStatusRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'host_id': string | undefined;
    public body?: UpdatePremiumHostProtectStatusRequestBody;
    public constructor(contentType?: any, hostId?: any) { 
        this['Content-Type'] = contentType;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: string): UpdatePremiumHostProtectStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePremiumHostProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): UpdatePremiumHostProtectStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withBody(body: UpdatePremiumHostProtectStatusRequestBody): UpdatePremiumHostProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}