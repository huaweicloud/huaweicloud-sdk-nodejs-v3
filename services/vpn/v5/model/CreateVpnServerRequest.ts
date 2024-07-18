import { CreateServerRequestBody } from './CreateServerRequestBody';


export class CreateVpnServerRequest {
    private 'p2c_vgw_id'?: string;
    private 'X-Client-Token'?: string;
    public body?: CreateServerRequestBody;
    public constructor(p2cVgwId?: string) { 
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public withP2cVgwId(p2cVgwId: string): CreateVpnServerRequest {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withXClientToken(xClientToken: string): CreateVpnServerRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateServerRequestBody): CreateVpnServerRequest {
        this['body'] = body;
        return this;
    }
}