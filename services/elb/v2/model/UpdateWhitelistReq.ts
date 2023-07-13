

export class UpdateWhitelistReq {
    private 'enable_whitelist'?: boolean | undefined;
    public whitelist?: string;
    public constructor() { 
    }
    public withEnableWhitelist(enableWhitelist: boolean): UpdateWhitelistReq {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: string): UpdateWhitelistReq {
        this['whitelist'] = whitelist;
        return this;
    }
}