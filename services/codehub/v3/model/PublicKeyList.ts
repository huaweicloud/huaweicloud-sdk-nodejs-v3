import { PublicKey } from './PublicKey';


export class PublicKeyList {
    public sshkey?: Array<PublicKey>;
    public total?: number;
    public constructor() { 
    }
    public withSshkey(sshkey: Array<PublicKey>): PublicKeyList {
        this['sshkey'] = sshkey;
        return this;
    }
    public withTotal(total: number): PublicKeyList {
        this['total'] = total;
        return this;
    }
}