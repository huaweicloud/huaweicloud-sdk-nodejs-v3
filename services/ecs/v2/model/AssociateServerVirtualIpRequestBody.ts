import { AssociateServerVirtualIpOption } from './AssociateServerVirtualIpOption';


export class AssociateServerVirtualIpRequestBody {
    public nic: AssociateServerVirtualIpOption;
    public constructor(nic?: any) { 
        this['nic'] = nic;
    }
    public withNic(nic: AssociateServerVirtualIpOption): AssociateServerVirtualIpRequestBody {
        this['nic'] = nic;
        return this;
    }
}