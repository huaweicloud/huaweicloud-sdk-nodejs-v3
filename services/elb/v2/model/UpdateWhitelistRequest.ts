import { UpdateWhitelistRequestBody } from './UpdateWhitelistRequestBody';


export class UpdateWhitelistRequest {
    private 'whitelist_id'?: string;
    public body?: UpdateWhitelistRequestBody;
    public constructor(whitelistId?: string) { 
        this['whitelist_id'] = whitelistId;
    }
    public withWhitelistId(whitelistId: string): UpdateWhitelistRequest {
        this['whitelist_id'] = whitelistId;
        return this;
    }
    public set whitelistId(whitelistId: string  | undefined) {
        this['whitelist_id'] = whitelistId;
    }
    public get whitelistId(): string | undefined {
        return this['whitelist_id'];
    }
    public withBody(body: UpdateWhitelistRequestBody): UpdateWhitelistRequest {
        this['body'] = body;
        return this;
    }
}