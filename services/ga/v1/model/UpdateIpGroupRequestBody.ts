import { UpdateIpGroupOption } from './UpdateIpGroupOption';


export class UpdateIpGroupRequestBody {
    private 'ip_group'?: UpdateIpGroupOption;
    public constructor(ipGroup?: UpdateIpGroupOption) { 
        this['ip_group'] = ipGroup;
    }
    public withIpGroup(ipGroup: UpdateIpGroupOption): UpdateIpGroupRequestBody {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: UpdateIpGroupOption  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): UpdateIpGroupOption | undefined {
        return this['ip_group'];
    }
}