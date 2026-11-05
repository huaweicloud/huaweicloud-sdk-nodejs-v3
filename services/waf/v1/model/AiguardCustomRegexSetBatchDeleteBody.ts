

export class AiguardCustomRegexSetBatchDeleteBody {
    private 'regex_set_ids'?: Array<string>;
    public constructor(regexSetIds?: Array<string>) { 
        this['regex_set_ids'] = regexSetIds;
    }
    public withRegexSetIds(regexSetIds: Array<string>): AiguardCustomRegexSetBatchDeleteBody {
        this['regex_set_ids'] = regexSetIds;
        return this;
    }
    public set regexSetIds(regexSetIds: Array<string>  | undefined) {
        this['regex_set_ids'] = regexSetIds;
    }
    public get regexSetIds(): Array<string> | undefined {
        return this['regex_set_ids'];
    }
}