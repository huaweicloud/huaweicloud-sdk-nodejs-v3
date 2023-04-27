import { UpdateTransferRequestBody } from './UpdateTransferRequestBody';


export class UpdateTransferRequest {
    private 'Content-Type': string | undefined;
    public body?: UpdateTransferRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateTransferRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateTransferRequestBody): UpdateTransferRequest {
        this['body'] = body;
        return this;
    }
}