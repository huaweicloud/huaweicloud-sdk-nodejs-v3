import { ResourceType } from './ResourceType';


export class ReferResourceCreate {
    public id?: string;
    public type?: ResourceType;
    private 'refer_alias'?: string;
    public parameters?: object;
    public constructor(id?: string, type?: ResourceType) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): ReferResourceCreate {
        this['id'] = id;
        return this;
    }
    public withType(type: ResourceType): ReferResourceCreate {
        this['type'] = type;
        return this;
    }
    public withReferAlias(referAlias: string): ReferResourceCreate {
        this['refer_alias'] = referAlias;
        return this;
    }
    public set referAlias(referAlias: string  | undefined) {
        this['refer_alias'] = referAlias;
    }
    public get referAlias(): string | undefined {
        return this['refer_alias'];
    }
    public withParameters(parameters: object): ReferResourceCreate {
        this['parameters'] = parameters;
        return this;
    }
}