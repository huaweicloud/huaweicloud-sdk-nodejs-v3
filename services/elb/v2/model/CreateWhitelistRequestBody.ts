import { CreateWhitelistReq } from './CreateWhitelistReq';


export class CreateWhitelistRequestBody {
    public whitelist: CreateWhitelistReq;
    public constructor(whitelist?: any) { 
        this['whitelist'] = whitelist;
    }
    public withWhitelist(whitelist: CreateWhitelistReq): CreateWhitelistRequestBody {
        this['whitelist'] = whitelist;
        return this;
    }
}