

export class UpdateSubscriptionUserRequestBody {
    public name?: string;
    public group?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateSubscriptionUserRequestBody {
        this['name'] = name;
        return this;
    }
    public withGroup(group: Array<string>): UpdateSubscriptionUserRequestBody {
        this['group'] = group;
        return this;
    }
}