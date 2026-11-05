import { AiguardCustomRegexBody } from './AiguardCustomRegexBody';


export class CreateCustomRegexRequest {
    private 'Content-Type'?: string;
    private 'regex_set_id'?: string;
    public body?: AiguardCustomRegexBody;
    public constructor(contentType?: string, regexSetId?: string) { 
        this['Content-Type'] = contentType;
        this['regex_set_id'] = regexSetId;
    }
    public withContentType(contentType: string): CreateCustomRegexRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegexSetId(regexSetId: string): CreateCustomRegexRequest {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
    public withBody(body: AiguardCustomRegexBody): CreateCustomRegexRequest {
        this['body'] = body;
        return this;
    }
}