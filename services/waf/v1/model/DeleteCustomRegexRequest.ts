

export class DeleteCustomRegexRequest {
    private 'Content-Type'?: string;
    private 'regex_set_id'?: string;
    private 'regex_id'?: string;
    public constructor(contentType?: string, regexSetId?: string, regexId?: string) { 
        this['Content-Type'] = contentType;
        this['regex_set_id'] = regexSetId;
        this['regex_id'] = regexId;
    }
    public withContentType(contentType: string): DeleteCustomRegexRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegexSetId(regexSetId: string): DeleteCustomRegexRequest {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
    public withRegexId(regexId: string): DeleteCustomRegexRequest {
        this['regex_id'] = regexId;
        return this;
    }
    public set regexId(regexId: string  | undefined) {
        this['regex_id'] = regexId;
    }
    public get regexId(): string | undefined {
        return this['regex_id'];
    }
}