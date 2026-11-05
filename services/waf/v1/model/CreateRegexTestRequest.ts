import { RegexTestRequest } from './RegexTestRequest';


export class CreateRegexTestRequest {
    private 'Content-Type'?: string;
    public body?: RegexTestRequest;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateRegexTestRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: RegexTestRequest): CreateRegexTestRequest {
        this['body'] = body;
        return this;
    }
}