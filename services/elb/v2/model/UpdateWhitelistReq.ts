

export class UpdateWhitelistReq {
    private 'enable_whitelist'?: boolean;
    public whitelist?: string;
    public constructor() { 
    }
    public withEnableWhitelist(enableWhitelist: boolean): UpdateWhitelistReq {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: string): UpdateWhitelistReq {
        this['whitelist'] = whitelist;
        return this;
    }
}