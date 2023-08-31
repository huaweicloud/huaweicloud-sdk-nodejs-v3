import { PrivateTag } from './PrivateTag';


export class CreatTransitIpOption {
    private 'virsubnet_id'?: string;
    private 'ip_address'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<PrivateTag>;
    public constructor(virsubnetId?: string) { 
        this['virsubnet_id'] = virsubnetId;
    }
    public withVirsubnetId(virsubnetId: string): CreatTransitIpOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withIpAddress(ipAddress: string): CreatTransitIpOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatTransitIpOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<PrivateTag>): CreatTransitIpOption {
        this['tags'] = tags;
        return this;
    }
}