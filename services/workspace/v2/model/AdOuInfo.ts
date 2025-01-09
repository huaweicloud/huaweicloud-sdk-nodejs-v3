

export class AdOuInfo {
    private 'ou_name'?: string;
    private 'ou_dn'?: string;
    public constructor() { 
    }
    public withOuName(ouName: string): AdOuInfo {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withOuDn(ouDn: string): AdOuInfo {
        this['ou_dn'] = ouDn;
        return this;
    }
    public set ouDn(ouDn: string  | undefined) {
        this['ou_dn'] = ouDn;
    }
    public get ouDn(): string | undefined {
        return this['ou_dn'];
    }
}