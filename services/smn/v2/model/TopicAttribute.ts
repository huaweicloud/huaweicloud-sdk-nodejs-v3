

export class TopicAttribute {
    private 'access_policy'?: string;
    public introduction?: string;
    public constructor() { 
    }
    public withAccessPolicy(accessPolicy: string): TopicAttribute {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): string | undefined {
        return this['access_policy'];
    }
    public withIntroduction(introduction: string): TopicAttribute {
        this['introduction'] = introduction;
        return this;
    }
}