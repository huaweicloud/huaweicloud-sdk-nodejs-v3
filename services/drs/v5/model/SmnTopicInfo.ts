

export class SmnTopicInfo {
    public name?: string;
    public urn?: string;
    public description?: string;
    private 'push_policy'?: string;
    public constructor(name?: string, urn?: string, pushPolicy?: string) { 
        this['name'] = name;
        this['urn'] = urn;
        this['push_policy'] = pushPolicy;
    }
    public withName(name: string): SmnTopicInfo {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): SmnTopicInfo {
        this['urn'] = urn;
        return this;
    }
    public withDescription(description: string): SmnTopicInfo {
        this['description'] = description;
        return this;
    }
    public withPushPolicy(pushPolicy: string): SmnTopicInfo {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: string  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): string | undefined {
        return this['push_policy'];
    }
}