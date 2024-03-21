import { CreateDependencyRequestBody } from './CreateDependencyRequestBody';


export class CreateDependencyVersionRequest {
    private 'Content-Type'?: string;
    public body?: CreateDependencyRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateDependencyVersionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateDependencyRequestBody): CreateDependencyVersionRequest {
        this['body'] = body;
        return this;
    }
}