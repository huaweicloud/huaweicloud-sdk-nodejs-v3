import { CreateTransferRequestBody } from './CreateTransferRequestBody';


export class CreateTransferRequest {
    private 'Content-Type'?: string;
    public body?: CreateTransferRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateTransferRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateTransferRequestBody): CreateTransferRequest {
        this['body'] = body;
        return this;
    }
}