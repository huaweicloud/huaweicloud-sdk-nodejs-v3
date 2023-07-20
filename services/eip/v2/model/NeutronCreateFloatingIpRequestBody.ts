import { CreateFloatingIpOption } from './CreateFloatingIpOption';


export class NeutronCreateFloatingIpRequestBody {
    public floatingip?: CreateFloatingIpOption;
    public constructor(floatingip?: CreateFloatingIpOption) { 
        this['floatingip'] = floatingip;
    }
    public withFloatingip(floatingip: CreateFloatingIpOption): NeutronCreateFloatingIpRequestBody {
        this['floatingip'] = floatingip;
        return this;
    }
}