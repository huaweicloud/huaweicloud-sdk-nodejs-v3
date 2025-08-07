

export class Agreement {
    public id?: string;
    public name?: string;
    public language?: string;
    public version?: string;
    private 'provision_url'?: string;
    public constructor() { 
    }
    public withId(id: string): Agreement {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Agreement {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: string): Agreement {
        this['language'] = language;
        return this;
    }
    public withVersion(version: string): Agreement {
        this['version'] = version;
        return this;
    }
    public withProvisionUrl(provisionUrl: string): Agreement {
        this['provision_url'] = provisionUrl;
        return this;
    }
    public set provisionUrl(provisionUrl: string  | undefined) {
        this['provision_url'] = provisionUrl;
    }
    public get provisionUrl(): string | undefined {
        return this['provision_url'];
    }
}