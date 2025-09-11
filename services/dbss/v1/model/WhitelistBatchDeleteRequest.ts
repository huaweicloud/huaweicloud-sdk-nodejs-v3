

export class WhitelistBatchDeleteRequest {
    public whitelists?: Array<string>;
    public constructor(whitelists?: Array<string>) { 
        this['whitelists'] = whitelists;
    }
    public withWhitelists(whitelists: Array<string>): WhitelistBatchDeleteRequest {
        this['whitelists'] = whitelists;
        return this;
    }
}