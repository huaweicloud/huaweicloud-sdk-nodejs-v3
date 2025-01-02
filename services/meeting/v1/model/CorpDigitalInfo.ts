

export class CorpDigitalInfo {
    public account?: string;
    public corpId?: string;
    public type?: string;
    public name?: string;
    public constructor() { 
    }
    public withAccount(account: string): CorpDigitalInfo {
        this['account'] = account;
        return this;
    }
    public withCorpId(corpId: string): CorpDigitalInfo {
        this['corpId'] = corpId;
        return this;
    }
    public withType(type: string): CorpDigitalInfo {
        this['type'] = type;
        return this;
    }
    public withName(name: string): CorpDigitalInfo {
        this['name'] = name;
        return this;
    }
}