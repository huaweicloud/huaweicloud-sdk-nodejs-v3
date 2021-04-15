

export class TagV5DTO {
    private 'tag_key': string | undefined;
    private 'tag_value'?: string | undefined;
    public constructor(tagKey?: any) { 
        this['tag_key'] = tagKey;
    }
    public withTagKey(tagKey: string): TagV5DTO {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey() {
        return this['tag_key'];
    }
    public withTagValue(tagValue: string): TagV5DTO {
        this['tag_value'] = tagValue;
        return this;
    }
    public set tagValue(tagValue: string | undefined) {
        this['tag_value'] = tagValue;
    }
    public get tagValue() {
        return this['tag_value'];
    }
}