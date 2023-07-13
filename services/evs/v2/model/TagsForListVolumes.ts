

export class TagsForListVolumes {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): TagsForListVolumes {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagsForListVolumes {
        this['values'] = values;
        return this;
    }
}