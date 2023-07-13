import { CreatePrePaidPublicipExtendParamOption } from './CreatePrePaidPublicipExtendParamOption';
import { CreatePrePaidPublicipOption } from './CreatePrePaidPublicipOption';
import { CreatePublicipBandwidthOption } from './CreatePublicipBandwidthOption';


export class CreatePrePaidPublicipRequestBody {
    public publicip: CreatePrePaidPublicipOption;
    public bandwidth: CreatePublicipBandwidthOption;
    public extendParam?: CreatePrePaidPublicipExtendParamOption;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(publicip?: any, bandwidth?: any) { 
        this['publicip'] = publicip;
        this['bandwidth'] = bandwidth;
    }
    public withPublicip(publicip: CreatePrePaidPublicipOption): CreatePrePaidPublicipRequestBody {
        this['publicip'] = publicip;
        return this;
    }
    public withBandwidth(bandwidth: CreatePublicipBandwidthOption): CreatePrePaidPublicipRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withExtendParam(extendParam: CreatePrePaidPublicipExtendParamOption): CreatePrePaidPublicipRequestBody {
        this['extendParam'] = extendParam;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePrePaidPublicipRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}