

export class ForwardingInfo {
    public eip?: string;
    private 'enable_snat'?: boolean;
    public constructor() { 
    }
    public withEip(eip: string): ForwardingInfo {
        this['eip'] = eip;
        return this;
    }
    public withEnableSnat(enableSnat: boolean): ForwardingInfo {
        this['enable_snat'] = enableSnat;
        return this;
    }
    public set enableSnat(enableSnat: boolean  | undefined) {
        this['enable_snat'] = enableSnat;
    }
    public get enableSnat(): boolean | undefined {
        return this['enable_snat'];
    }
}