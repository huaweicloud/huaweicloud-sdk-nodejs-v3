import { UpdateWhitelistRequestBody } from './UpdateWhitelistRequestBody';


export class UpdateWhitelistRequest {
    private 'whitelist_id': string | undefined;
    public body?: UpdateWhitelistRequestBody;
    public constructor(whitelistId?: any) { 
        this['whitelist_id'] = whitelistId;
    }
    public withWhitelistId(whitelistId: string): UpdateWhitelistRequest {
        this['whitelist_id'] = whitelistId;
        return this;
    }
    public set whitelistId(whitelistId: string | undefined) {
        this['whitelist_id'] = whitelistId;
    }
    public get whitelistId() {
        return this['whitelist_id'];
    }
    public withBody(body: UpdateWhitelistRequestBody): UpdateWhitelistRequest {
        this['body'] = body;
        return this;
    }
}