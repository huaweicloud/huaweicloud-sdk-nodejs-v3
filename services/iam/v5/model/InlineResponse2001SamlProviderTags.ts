

export class InlineResponse2001SamlProviderTags {
    private 'tag_key'?: string;
    private 'tag_value'?: string;
    public constructor(tagKey?: string, tagValue?: string) { 
        this['tag_key'] = tagKey;
        this['tag_value'] = tagValue;
    }
    public withTagKey(tagKey: string): InlineResponse2001SamlProviderTags {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTagValue(tagValue: string): InlineResponse2001SamlProviderTags {
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