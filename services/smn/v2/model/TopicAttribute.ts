import { AccessPolicy } from './AccessPolicy';


export class TopicAttribute {
    private 'access_policy'?: AccessPolicy;
    public introduction?: string;
    public constructor() { 
    }
    public withAccessPolicy(accessPolicy: AccessPolicy): TopicAttribute {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: AccessPolicy  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): AccessPolicy | undefined {
        return this['access_policy'];
    }
    public withIntroduction(introduction: string): TopicAttribute {
        this['introduction'] = introduction;
        return this;
    }
}