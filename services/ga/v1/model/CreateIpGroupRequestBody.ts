import { CreateIpGroupOption } from './CreateIpGroupOption';


export class CreateIpGroupRequestBody {
    private 'ip_group'?: CreateIpGroupOption;
    public constructor(ipGroup?: CreateIpGroupOption) { 
        this['ip_group'] = ipGroup;
    }
    public withIpGroup(ipGroup: CreateIpGroupOption): CreateIpGroupRequestBody {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: CreateIpGroupOption  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): CreateIpGroupOption | undefined {
        return this['ip_group'];
    }
}