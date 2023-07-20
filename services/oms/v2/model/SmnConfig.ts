

export class SmnConfig {
    public language?: SmnConfigLanguageEnum | string;
    private 'topic_urn'?: string;
    private 'trigger_conditions'?: Array<string>;
    public constructor(topicUrn?: string, triggerConditions?: Array<string>) { 
        this['topic_urn'] = topicUrn;
        this['trigger_conditions'] = triggerConditions;
    }
    public withLanguage(language: SmnConfigLanguageEnum | string): SmnConfig {
        this['language'] = language;
        return this;
    }
    public withTopicUrn(topicUrn: string): SmnConfig {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTriggerConditions(triggerConditions: Array<string>): SmnConfig {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<string>  | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions(): Array<string> | undefined {
        return this['trigger_conditions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmnConfigLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
