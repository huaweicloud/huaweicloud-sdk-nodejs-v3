import { ModifyOuNameInfoV2Req } from './ModifyOuNameInfoV2Req';


export class UpdateOuInfoRequest {
    private 'ou_id'?: string;
    public body?: ModifyOuNameInfoV2Req;
    public constructor(ouId?: string) { 
        this['ou_id'] = ouId;
    }
    public withOuId(ouId: string): UpdateOuInfoRequest {
        this['ou_id'] = ouId;
        return this;
    }
    public set ouId(ouId: string  | undefined) {
        this['ou_id'] = ouId;
    }
    public get ouId(): string | undefined {
        return this['ou_id'];
    }
    public withBody(body: ModifyOuNameInfoV2Req): UpdateOuInfoRequest {
        this['body'] = body;
        return this;
    }
}