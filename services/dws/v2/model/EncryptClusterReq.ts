import { EncryptCluster } from './EncryptCluster';


export class EncryptClusterReq {
    public encrypt?: EncryptCluster;
    public constructor() { 
    }
    public withEncrypt(encrypt: EncryptCluster): EncryptClusterReq {
        this['encrypt'] = encrypt;
        return this;
    }
}