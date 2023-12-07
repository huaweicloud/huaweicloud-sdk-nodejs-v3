

export class TagsBody {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): TagsBody {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagsBody {
        this['values'] = values;
        return this;
    }
}