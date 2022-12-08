import { BatchBandwidth } from './BatchBandwidth';
import { BatchPublicIp } from './BatchPublicIp';


export class BatchCreatePublicipsV2RequestBody {
    public bandwidth: BatchBandwidth;
    public publicip: BatchPublicIp;
    private 'publicip_number': number | undefined;
    private 'enterprise_project_id': string | undefined;
    public constructor(bandwidth?: any, publicip?: any, publicipNumber?: any, enterpriseProjectId?: any) { 
        this['bandwidth'] = bandwidth;
        this['publicip'] = publicip;
        this['publicip_number'] = publicipNumber;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withBandwidth(bandwidth: BatchBandwidth): BatchCreatePublicipsV2RequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withPublicip(publicip: BatchPublicIp): BatchCreatePublicipsV2RequestBody {
        this['publicip'] = publicip;
        return this;
    }
    public withPublicipNumber(publicipNumber: number): BatchCreatePublicipsV2RequestBody {
        this['publicip_number'] = publicipNumber;
        return this;
    }
    public set publicipNumber(publicipNumber: number | undefined) {
        this['publicip_number'] = publicipNumber;
    }
    public get publicipNumber() {
        return this['publicip_number'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreatePublicipsV2RequestBody {
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