import { AiguardCustomRegexSetBatchDeleteBody } from './AiguardCustomRegexSetBatchDeleteBody';


export class BatchDeleteCustomRegexSetRequest {
    private 'Content-Type'?: string;
    public body?: AiguardCustomRegexSetBatchDeleteBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteCustomRegexSetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardCustomRegexSetBatchDeleteBody): BatchDeleteCustomRegexSetRequest {
        this['body'] = body;
        return this;
    }
}