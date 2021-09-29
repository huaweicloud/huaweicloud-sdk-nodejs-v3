import { DisassociateServerVirtualIpOption } from './DisassociateServerVirtualIpOption';


export class DisassociateServerVirtualIpRequestBody {
    public nic: DisassociateServerVirtualIpOption;
    public constructor(nic?: any) { 
        this['nic'] = nic;
    }
    public withNic(nic: DisassociateServerVirtualIpOption): DisassociateServerVirtualIpRequestBody {
        this['nic'] = nic;
        return this;
    }
}