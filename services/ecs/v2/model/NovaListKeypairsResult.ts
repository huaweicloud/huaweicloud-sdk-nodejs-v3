import { NovaSimpleKeypair } from './NovaSimpleKeypair';


export class NovaListKeypairsResult {
    public keypair?: NovaSimpleKeypair;
    public constructor(keypair?: NovaSimpleKeypair) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: NovaSimpleKeypair): NovaListKeypairsResult {
        this['keypair'] = keypair;
        return this;
    }
}