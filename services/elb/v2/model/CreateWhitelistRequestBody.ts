import { CreateWhitelistReq } from './CreateWhitelistReq';


export class CreateWhitelistRequestBody {
    public whitelist?: CreateWhitelistReq;
    public constructor(whitelist?: CreateWhitelistReq) { 
        this['whitelist'] = whitelist;
    }
    public withWhitelist(whitelist: CreateWhitelistReq): CreateWhitelistRequestBody {
        this['whitelist'] = whitelist;
        return this;
    }
}