import { NovaSimpleKeypair } from './NovaSimpleKeypair';


export class NovaListKeypairsResult {
    public keypair: NovaSimpleKeypair;
    public constructor(keypair?: any) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: NovaSimpleKeypair): NovaListKeypairsResult {
        this['keypair'] = keypair;
        return this;
    }
}