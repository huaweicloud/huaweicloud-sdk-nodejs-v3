

export class ResourceTag {
    public key?: string;
    public value?: string;
    private 'tag_type'?: string;
    public constructor(key?: string, value?: string, tagType?: string) { 
        this['key'] = key;
        this['value'] = value;
        this['tag_type'] = tagType;
    }
    public withKey(key: string): ResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTag {
        this['value'] = value;
        return this;
    }
    public withTagType(tagType: string): ResourceTag {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: string  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): string | undefined {
        return this['tag_type'];
    }
}