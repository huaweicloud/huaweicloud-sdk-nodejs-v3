import { AiguardCustomRegexSetBody } from './AiguardCustomRegexSetBody';


export class CreateCustomRegexSetRequest {
    private 'Content-Type'?: string;
    public body?: AiguardCustomRegexSetBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateCustomRegexSetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardCustomRegexSetBody): CreateCustomRegexSetRequest {
        this['body'] = body;
        return this;
    }
}