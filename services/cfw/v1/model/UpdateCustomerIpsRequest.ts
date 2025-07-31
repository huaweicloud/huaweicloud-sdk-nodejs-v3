import { CustomerIpsSaveDto } from './CustomerIpsSaveDto';


export class UpdateCustomerIpsRequest {
    private 'ips_cfw_id'?: string;
    private 'project_id'?: string;
    public body?: CustomerIpsSaveDto;
    public constructor(ipsCfwId?: string, projectId?: string) { 
        this['ips_cfw_id'] = ipsCfwId;
        this['project_id'] = projectId;
    }
    public withIpsCfwId(ipsCfwId: string): UpdateCustomerIpsRequest {
        this['ips_cfw_id'] = ipsCfwId;
        return this;
    }
    public set ipsCfwId(ipsCfwId: string  | undefined) {
        this['ips_cfw_id'] = ipsCfwId;
    }
    public get ipsCfwId(): string | undefined {
        return this['ips_cfw_id'];
    }
    public withProjectId(projectId: string): UpdateCustomerIpsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CustomerIpsSaveDto): UpdateCustomerIpsRequest {
        this['body'] = body;
        return this;
    }
}