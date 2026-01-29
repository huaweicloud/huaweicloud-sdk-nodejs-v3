

export class AlertConfig {
    private 'topic_urn'?: string;
    public type?: AlertConfigTypeEnum | string;
    public enable?: boolean;
    public constructor() { 
    }
    public withTopicUrn(topicUrn: string): AlertConfig {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withType(type: AlertConfigTypeEnum | string): AlertConfig {
        this['type'] = type;
        return this;
    }
    public withEnable(enable: boolean): AlertConfig {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertConfigTypeEnum {
    SMN = 'SMN',
    MC = 'MC'
}
