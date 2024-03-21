import { CreateFunctionAppRequestBody } from './CreateFunctionAppRequestBody';


export class CreateFunctionAppRequest {
    private 'Content-Type'?: string;
    public body?: CreateFunctionAppRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateFunctionAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateFunctionAppRequestBody): CreateFunctionAppRequest {
        this['body'] = body;
        return this;
    }
}