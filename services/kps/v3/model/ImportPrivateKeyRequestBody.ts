import { ImportPrivateKeyKeypairBean } from './ImportPrivateKeyKeypairBean';


export class ImportPrivateKeyRequestBody {
    public keypair?: ImportPrivateKeyKeypairBean;
    public constructor(keypair?: ImportPrivateKeyKeypairBean) { 
        this['keypair'] = keypair;
    }
    public withKeypair(keypair: ImportPrivateKeyKeypairBean): ImportPrivateKeyRequestBody {
        this['keypair'] = keypair;
        return this;
    }
}