import { UpdatePrivateNatOption } from './UpdatePrivateNatOption';


export class UpdatePrivateNatRequestBody {
    public gateway?: UpdatePrivateNatOption;
    public constructor(gateway?: UpdatePrivateNatOption) { 
        this['gateway'] = gateway;
    }
    public withGateway(gateway: UpdatePrivateNatOption): UpdatePrivateNatRequestBody {
        this['gateway'] = gateway;
        return this;
    }
}