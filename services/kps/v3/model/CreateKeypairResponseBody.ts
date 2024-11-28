import { CreateKeypairResp } from './CreateKeypairResp';


export class CreateKeypairResponseBody {
    public keypair?: CreateKeypairResp;
    public constructor() { 
    }
    public withKeypair(keypair: CreateKeypairResp): CreateKeypairResponseBody {
        this['keypair'] = keypair;
        return this;
    }
}