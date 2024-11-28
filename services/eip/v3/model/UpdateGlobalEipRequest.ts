import { UpdateGlobalEipRequestBody } from './UpdateGlobalEipRequestBody';


export class UpdateGlobalEipRequest {
    private 'global_eip_id'?: string;
    public body?: UpdateGlobalEipRequestBody;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withGlobalEipId(globalEipId: string): UpdateGlobalEipRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withBody(body: UpdateGlobalEipRequestBody): UpdateGlobalEipRequest {
        this['body'] = body;
        return this;
    }
}