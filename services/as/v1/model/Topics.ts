

export class Topics {
    private 'topic_urn'?: string;
    private 'topic_scene'?: Array<string>;
    private 'topic_name'?: string;
    public constructor() { 
    }
    public withTopicUrn(topicUrn: string): Topics {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTopicScene(topicScene: Array<string>): Topics {
        this['topic_scene'] = topicScene;
        return this;
    }
    public set topicScene(topicScene: Array<string>  | undefined) {
        this['topic_scene'] = topicScene;
    }
    public get topicScene(): Array<string> | undefined {
        return this['topic_scene'];
    }
    public withTopicName(topicName: string): Topics {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
}