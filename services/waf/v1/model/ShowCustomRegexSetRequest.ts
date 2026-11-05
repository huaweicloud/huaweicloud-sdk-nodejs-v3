

export class ShowCustomRegexSetRequest {
    private 'Content-Type'?: string;
    private 'regex_set_id'?: string;
    public constructor(contentType?: string, regexSetId?: string) { 
        this['Content-Type'] = contentType;
        this['regex_set_id'] = regexSetId;
    }
    public withContentType(contentType: string): ShowCustomRegexSetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegexSetId(regexSetId: string): ShowCustomRegexSetRequest {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
}