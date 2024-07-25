

export class ResourceTagBody {
    public key?: string;
    public value?: string;
    public resourceId?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ResourceTagBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTagBody {
        this['value'] = value;
        return this;
    }
    public withResourceId(resourceId: string): ResourceTagBody {
        this['resourceId'] = resourceId;
        return this;
    }
    public withValues(values: Array<string>): ResourceTagBody {
        this['values'] = values;
        return this;
    }
}