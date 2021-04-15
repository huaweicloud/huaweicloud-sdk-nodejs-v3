import { CreateVpcPeeringOption } from './CreateVpcPeeringOption';


export class CreateVpcPeeringRequestBody {
    public peering: CreateVpcPeeringOption;
    public constructor(peering?: any) { 
        this['peering'] = peering;
    }
    public withPeering(peering: CreateVpcPeeringOption): CreateVpcPeeringRequestBody {
        this['peering'] = peering;
        return this;
    }
}