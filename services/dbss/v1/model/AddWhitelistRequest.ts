import { ObjWhitelist } from './ObjWhitelist';


export class AddWhitelistRequest {
    public whitelists?: Array<ObjWhitelist>;
    public constructor(whitelists?: Array<ObjWhitelist>) { 
        this['whitelists'] = whitelists;
    }
    public withWhitelists(whitelists: Array<ObjWhitelist>): AddWhitelistRequest {
        this['whitelists'] = whitelists;
        return this;
    }
}