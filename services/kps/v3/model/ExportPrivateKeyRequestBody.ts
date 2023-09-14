import { KeypairBean } from './KeypairBean';


export class ExportPrivateKeyRequestBody {
    public keypair?: KeypairBean;
    public constructor(keypair?: KeypairBean) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: KeypairBean): ExportPrivateKeyRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}