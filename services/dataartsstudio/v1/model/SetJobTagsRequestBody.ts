

export class SetJobTagsRequestBody {
    private 'tag_names'?: Array<string>;
    public constructor() { 
    }
    public withTagNames(tagNames: Array<string>): SetJobTagsRequestBody {
        this['tag_names'] = tagNames;
        return this;
    }
    public set tagNames(tagNames: Array<string>  | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames(): Array<string> | undefined {
        return this['tag_names'];
    }
}