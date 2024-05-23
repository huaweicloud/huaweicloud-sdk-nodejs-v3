

export class UntagResourceReqBody {
    private 'tag_keys'?: Array<string>;
    public constructor(tagKeys?: Array<string>) { 
        this['tag_keys'] = tagKeys;
    }
    public withTagKeys(tagKeys: Array<string>): UntagResourceReqBody {
        this['tag_keys'] = tagKeys;
        return this;
    }
    public set tagKeys(tagKeys: Array<string>  | undefined) {
        this['tag_keys'] = tagKeys;
    }
    public get tagKeys(): Array<string> | undefined {
        return this['tag_keys'];
    }
}