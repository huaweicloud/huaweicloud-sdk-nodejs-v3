import { UpdateFloatingIpOption } from './UpdateFloatingIpOption';


export class NeutronUpdateFloatingIpRequestBody {
    public floatingip?: UpdateFloatingIpOption;
    public constructor(floatingip?: UpdateFloatingIpOption) { 
        this['floatingip'] = floatingip;
    }
    public withFloatingip(floatingip: UpdateFloatingIpOption): NeutronUpdateFloatingIpRequestBody {
        this['floatingip'] = floatingip;
        return this;
    }
}