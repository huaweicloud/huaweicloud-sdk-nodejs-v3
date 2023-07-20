

export class ProjectTagInfoResponse {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ProjectTagInfoResponse {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ProjectTagInfoResponse {
        this['values'] = values;
        return this;
    }
}