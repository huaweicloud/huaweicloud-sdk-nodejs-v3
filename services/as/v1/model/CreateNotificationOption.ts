

export class CreateNotificationOption {
    private 'topic_urn'?: string;
    private 'topic_scene'?: Array<CreateNotificationOptionTopicSceneEnum> | Array<string>;
    public constructor(topicUrn?: string, topicScene?: Array<string>) { 
        this['topic_urn'] = topicUrn;
        this['topic_scene'] = topicScene;
    }
    public withTopicUrn(topicUrn: string): CreateNotificationOption {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTopicScene(topicScene: Array<CreateNotificationOptionTopicSceneEnum> | Array<string>): CreateNotificationOption {
        this['topic_scene'] = topicScene;
        return this;
    }
    public set topicScene(topicScene: Array<CreateNotificationOptionTopicSceneEnum> | Array<string>  | undefined) {
        this['topic_scene'] = topicScene;
    }
    public get topicScene(): Array<CreateNotificationOptionTopicSceneEnum> | Array<string> | undefined {
        return this['topic_scene'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationOptionTopicSceneEnum {
    SCALING_UP = 'SCALING_UP',
    SCALING_UP_FAIL = 'SCALING_UP_FAIL',
    SCALING_DOWN = 'SCALING_DOWN',
    SCALING_DOWN_FAIL = 'SCALING_DOWN_FAIL',
    SCALING_GROUP_ABNORMAL = 'SCALING_GROUP_ABNORMAL'
}
