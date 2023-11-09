import { ResourceType } from './ResourceType';


export class ReferResources {
    public id?: string;
    public type?: ResourceType;
    private 'refer_alias'?: string;
    public parameters?: object;
    public constructor() { 
    }
    public withId(id: string): ReferResources {
        this['id'] = id;
        return this;
    }
    public withType(type: ResourceType): ReferResources {
        this['type'] = type;
        return this;
    }
    public withReferAlias(referAlias: string): ReferResources {
        this['refer_alias'] = referAlias;
        return this;
    }
    public set referAlias(referAlias: string  | undefined) {
        this['refer_alias'] = referAlias;
    }
    public get referAlias(): string | undefined {
        return this['refer_alias'];
    }
    public withParameters(parameters: object): ReferResources {
        this['parameters'] = parameters;
        return this;
    }
}