

export class ShowWhitelistRequest {
    private 'whitelist_id': string | undefined;
    public constructor(whitelistId?: any) { 
        this['whitelist_id'] = whitelistId;
    }
    public withWhitelistId(whitelistId: string): ShowWhitelistRequest {
        this['whitelist_id'] = whitelistId;
        return this;
    }
    public set whitelistId(whitelistId: string | undefined) {
        this['whitelist_id'] = whitelistId;
    }
    public get whitelistId() {
        return this['whitelist_id'];
    }
}