import { TransferKeyRequestBody } from './TransferKeyRequestBody';


export class TransferKeyRequest {
    public body?: TransferKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: TransferKeyRequestBody): TransferKeyRequest {
        this['body'] = body;
        return this;
    }
}