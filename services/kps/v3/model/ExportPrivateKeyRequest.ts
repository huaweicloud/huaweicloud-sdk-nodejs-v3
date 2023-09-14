import { ExportPrivateKeyRequestBody } from './ExportPrivateKeyRequestBody';


export class ExportPrivateKeyRequest {
    public body?: ExportPrivateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportPrivateKeyRequestBody): ExportPrivateKeyRequest {
        this['body'] = body;
        return this;
    }
}