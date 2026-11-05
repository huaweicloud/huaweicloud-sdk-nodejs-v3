

export class ListCustomRegexRequest {
    private 'Content-Type'?: string;
    private 'regex_set_id'?: string;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string, regexSetId?: string) { 
        this['Content-Type'] = contentType;
        this['regex_set_id'] = regexSetId;
    }
    public withContentType(contentType: string): ListCustomRegexRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegexSetId(regexSetId: string): ListCustomRegexRequest {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
    public withName(name: string): ListCustomRegexRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListCustomRegexRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomRegexRequest {
        this['limit'] = limit;
        return this;
    }
}