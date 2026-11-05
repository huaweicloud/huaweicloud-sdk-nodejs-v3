import { AiguardCustomRegexSetUpdateBody } from './AiguardCustomRegexSetUpdateBody';


export class UpdateCustomRegexSetRequest {
    private 'Content-Type'?: string;
    private 'regex_set_id'?: string;
    public body?: AiguardCustomRegexSetUpdateBody;
    public constructor(contentType?: string, regexSetId?: string) { 
        this['Content-Type'] = contentType;
        this['regex_set_id'] = regexSetId;
    }
    public withContentType(contentType: string): UpdateCustomRegexSetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegexSetId(regexSetId: string): UpdateCustomRegexSetRequest {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
    public withBody(body: AiguardCustomRegexSetUpdateBody): UpdateCustomRegexSetRequest {
        this['body'] = body;
        return this;
    }
}