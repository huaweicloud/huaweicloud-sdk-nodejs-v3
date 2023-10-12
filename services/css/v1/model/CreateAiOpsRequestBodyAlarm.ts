

export class CreateAiOpsRequestBodyAlarm {
    public level?: string;
    private 'smn_topic'?: string;
    public constructor(level?: string, smnTopic?: string) { 
        this['level'] = level;
        this['smn_topic'] = smnTopic;
    }
    public withLevel(level: string): CreateAiOpsRequestBodyAlarm {
        this['level'] = level;
        return this;
    }
    public withSmnTopic(smnTopic: string): CreateAiOpsRequestBodyAlarm {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
}