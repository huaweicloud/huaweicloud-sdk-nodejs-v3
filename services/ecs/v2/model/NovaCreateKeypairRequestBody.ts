import { NovaCreateKeypairOption } from './NovaCreateKeypairOption';


export class NovaCreateKeypairRequestBody {
    public keypair: NovaCreateKeypairOption;
    public constructor(keypair?: any) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: NovaCreateKeypairOption): NovaCreateKeypairRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}