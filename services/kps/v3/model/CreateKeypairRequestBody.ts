import { CreateKeypairAction } from './CreateKeypairAction';


export class CreateKeypairRequestBody {
    public keypair?: CreateKeypairAction;
    public constructor(keypair?: CreateKeypairAction) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: CreateKeypairAction): CreateKeypairRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}