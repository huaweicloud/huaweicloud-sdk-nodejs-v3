

export class AddOuNameInfoV2Req {
    public domain?: string;
    private 'ou_name'?: string;
    public description?: string;
    public constructor(domain?: string, ouName?: string) { 
        this['domain'] = domain;
        this['ou_name'] = ouName;
    }
    public withDomain(domain: string): AddOuNameInfoV2Req {
        this['domain'] = domain;
        return this;
    }
    public withOuName(ouName: string): AddOuNameInfoV2Req {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withDescription(description: string): AddOuNameInfoV2Req {
        this['description'] = description;
        return this;
    }
}