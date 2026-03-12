

export class DomainTags {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): DomainTags {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): DomainTags {
        this['values'] = values;
        return this;
    }
}