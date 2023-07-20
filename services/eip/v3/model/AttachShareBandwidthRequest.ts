import { AttachSharebwReq } from './AttachSharebwReq';


export class AttachShareBandwidthRequest {
    private 'publicip_id'?: string;
    public body?: AttachSharebwReq;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): AttachShareBandwidthRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: AttachSharebwReq): AttachShareBandwidthRequest {
        this['body'] = body;
        return this;
    }
}