

export class UpdateEndpointWhiteRequestBody {
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    public constructor() { 
    }
    public withWhitelist(whitelist: Array<string>): UpdateEndpointWhiteRequestBody {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): UpdateEndpointWhiteRequestBody {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
}