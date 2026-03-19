import { UpdatePremiumHostAccessStatusRequestBody } from './UpdatePremiumHostAccessStatusRequestBody';


export class UpdatePremiumHostAccessStatusRequest {
    private 'host_id'?: string;
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: UpdatePremiumHostAccessStatusRequestBody;
    public constructor(hostId?: string, contentType?: string) { 
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withHostId(hostId: string): UpdatePremiumHostAccessStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withContentType(contentType: string): UpdatePremiumHostAccessStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePremiumHostAccessStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdatePremiumHostAccessStatusRequestBody): UpdatePremiumHostAccessStatusRequest {
        this['body'] = body;
        return this;
    }
}