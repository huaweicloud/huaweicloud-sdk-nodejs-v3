import { CreateFunctionRequestBody } from './CreateFunctionRequestBody';


export class CreateFunctionRequest {
    private 'Content-Type'?: string;
    public body?: CreateFunctionRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateFunctionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateFunctionRequestBody): CreateFunctionRequest {
        this['body'] = body;
        return this;
    }
}