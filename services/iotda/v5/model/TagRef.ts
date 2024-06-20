

export class TagRef {
    private 'tag_key'?: object;
    private 'tag_value'?: object;
    public constructor() { 
    }
    public withTagKey(tagKey: object): TagRef {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: object  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): object | undefined {
        return this['tag_key'];
    }
    public withTagValue(tagValue: object): TagRef {
        this['tag_value'] = tagValue;
        return this;
    }
    public set tagValue(tagValue: object  | undefined) {
        this['tag_value'] = tagValue;
    }
    public get tagValue(): object | undefined {
        return this['tag_value'];
    }
}