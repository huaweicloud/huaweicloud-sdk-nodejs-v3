import { UpdateVgwRequestBody } from './UpdateVgwRequestBody';


export class UpdateVgwRequest {
    private 'vgw_id'?: string;
    public body?: UpdateVgwRequestBody;
    public constructor(vgwId?: string) { 
        this['vgw_id'] = vgwId;
    }
    public withVgwId(vgwId: string): UpdateVgwRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withBody(body: UpdateVgwRequestBody): UpdateVgwRequest {
        this['body'] = body;
        return this;
    }
}