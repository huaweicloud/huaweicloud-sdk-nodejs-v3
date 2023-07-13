import { CreatePublicipBandwidthOption } from './CreatePublicipBandwidthOption';
import { CreatePublicipOption } from './CreatePublicipOption';


export class CreatePublicipRequestBody {
    public bandwidth: CreatePublicipBandwidthOption;
    private 'enterprise_project_id'?: string | undefined;
    public publicip: CreatePublicipOption;
    public constructor(bandwidth?: any, publicip?: any) { 
        this['bandwidth'] = bandwidth;
        this['publicip'] = publicip;
    }
    public withBandwidth(bandwidth: CreatePublicipBandwidthOption): CreatePublicipRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePublicipRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPublicip(publicip: CreatePublicipOption): CreatePublicipRequestBody {
        this['publicip'] = publicip;
        return this;
    }
}