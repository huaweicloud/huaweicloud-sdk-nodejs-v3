import { CreateKeypairAction } from './CreateKeypairAction';


export class CreateKeypairRequestBody {
    public keypair: CreateKeypairAction;
    public constructor(keypair?: any) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: CreateKeypairAction): CreateKeypairRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}