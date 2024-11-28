import { Keypairs } from './Keypairs';


export class BatchExportPrivateKeyRequest {
    public body?: Array<Keypairs>;
    public constructor() { 
    }
    public withBody(body: Array<Keypairs>): BatchExportPrivateKeyRequest {
        this['body'] = body;
        return this;
    }
}