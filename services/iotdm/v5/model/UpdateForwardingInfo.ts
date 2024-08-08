

export class UpdateForwardingInfo {
    private 'enable_snat'?: boolean;
    public constructor(enableSnat?: boolean) { 
        this['enable_snat'] = enableSnat;
    }
    public withEnableSnat(enableSnat: boolean): UpdateForwardingInfo {
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