

export class ResourceTag {
    public key?: string;
    public value?: string;
    private 'tags_to_streams_enable'?: string;
    public constructor(key?: string, value?: string, tagsToStreamsEnable?: string) { 
        this['key'] = key;
        this['value'] = value;
        this['tags_to_streams_enable'] = tagsToStreamsEnable;
    }
    public withKey(key: string): ResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTag {
        this['value'] = value;
        return this;
    }
    public withTagsToStreamsEnable(tagsToStreamsEnable: string): ResourceTag {
        this['tags_to_streams_enable'] = tagsToStreamsEnable;
        return this;
    }
    public set tagsToStreamsEnable(tagsToStreamsEnable: string  | undefined) {
        this['tags_to_streams_enable'] = tagsToStreamsEnable;
    }
    public get tagsToStreamsEnable(): string | undefined {
        return this['tags_to_streams_enable'];
    }
}