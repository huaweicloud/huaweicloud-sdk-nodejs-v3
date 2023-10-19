

export class TagsVO {
    private 'tag_id'?: string;
    private 'tag_key'?: string;
    private 'tag_value'?: string;
    public constructor() { 
    }
    public withTagId(tagId: string): TagsVO {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withTagKey(tagKey: string): TagsVO {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTagValue(tagValue: string): TagsVO {
        this['tag_value'] = tagValue;
        return this;
    }
    public set tagValue(tagValue: string  | undefined) {
        this['tag_value'] = tagValue;
    }
    public get tagValue(): string | undefined {
        return this['tag_value'];
    }
}