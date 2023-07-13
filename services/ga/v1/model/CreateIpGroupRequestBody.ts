import { CreateIpGroupOption } from './CreateIpGroupOption';


export class CreateIpGroupRequestBody {
    private 'ip_group': CreateIpGroupOption | undefined;
    public constructor(ipGroup?: any) { 
        this['ip_group'] = ipGroup;
    }
    public withIpGroup(ipGroup: CreateIpGroupOption): CreateIpGroupRequestBody {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: CreateIpGroupOption | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup() {
        return this['ip_group'];
    }
}