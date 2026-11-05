

export class FailedCustomRegexSet {
    private 'regex_set_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withRegexSetId(regexSetId: string): FailedCustomRegexSet {
        this['regex_set_id'] = regexSetId;
        return this;
    }
    public set regexSetId(regexSetId: string  | undefined) {
        this['regex_set_id'] = regexSetId;
    }
    public get regexSetId(): string | undefined {
        return this['regex_set_id'];
    }
    public withReason(reason: string): FailedCustomRegexSet {
        this['reason'] = reason;
        return this;
    }
}