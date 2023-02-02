import { Keypair } from './Keypair';


export class Keypairs {
    public keypair: Keypair;
    public constructor(keypair?: any) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: Keypair): Keypairs {
        this['keypair'] = keypair;
        return this;
    }
}