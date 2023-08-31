import { CreatePrivateNatOption } from './CreatePrivateNatOption';


export class CreatePrivateNatRequestBody {
    public gateway?: CreatePrivateNatOption;
    public constructor(gateway?: CreatePrivateNatOption) { 
        this['gateway'] = gateway;
    }
    public withGateway(gateway: CreatePrivateNatOption): CreatePrivateNatRequestBody {
        this['gateway'] = gateway;
        return this;
    }
}