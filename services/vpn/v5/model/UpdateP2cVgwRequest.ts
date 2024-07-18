import { UpdateP2cVgwRequestBody } from './UpdateP2cVgwRequestBody';


export class UpdateP2cVgwRequest {
    private 'p2c_vgw_id'?: string;
    public body?: UpdateP2cVgwRequestBody;
    public constructor(p2cVgwId?: string) { 
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public withP2cVgwId(p2cVgwId: string): UpdateP2cVgwRequest {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withBody(body: UpdateP2cVgwRequestBody): UpdateP2cVgwRequest {
        this['body'] = body;
        return this;
    }
}