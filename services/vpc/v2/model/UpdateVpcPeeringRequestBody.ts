import { UpdateVpcPeeringOption } from './UpdateVpcPeeringOption';


export class UpdateVpcPeeringRequestBody {
    public peering: UpdateVpcPeeringOption;
    public constructor(peering?: any) { 
        this['peering'] = peering;
    }
    public withPeering(peering: UpdateVpcPeeringOption): UpdateVpcPeeringRequestBody {
        this['peering'] = peering;
        return this;
    }
}