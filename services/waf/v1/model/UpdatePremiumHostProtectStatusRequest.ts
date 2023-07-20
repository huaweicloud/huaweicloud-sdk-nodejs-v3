import { UpdatePremiumHostProtectStatusRequestBody } from './UpdatePremiumHostProtectStatusRequestBody';


export class UpdatePremiumHostProtectStatusRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public body?: UpdatePremiumHostProtectStatusRequestBody;
    public constructor(contentType?: string, hostId?: string) { 
        this['Content-Type'] = contentType;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: string): UpdatePremiumHostProtectStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePremiumHostProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): UpdatePremiumHostProtectStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: UpdatePremiumHostProtectStatusRequestBody): UpdatePremiumHostProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}