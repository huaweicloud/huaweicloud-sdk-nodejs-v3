import { UpdateKeypairDescriptionReq } from './UpdateKeypairDescriptionReq';


export class UpdateKeypairDescriptionRequestBody {
    public keypair: UpdateKeypairDescriptionReq;
    public constructor(keypair?: any) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: UpdateKeypairDescriptionReq): UpdateKeypairDescriptionRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}