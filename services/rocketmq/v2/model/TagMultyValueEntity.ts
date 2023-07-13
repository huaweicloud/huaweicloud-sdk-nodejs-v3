

export class TagMultyValueEntity {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagMultyValueEntity {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagMultyValueEntity {
        this['values'] = values;
        return this;
    }
}