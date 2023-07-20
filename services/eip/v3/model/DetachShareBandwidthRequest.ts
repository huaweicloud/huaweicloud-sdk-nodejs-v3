import { DetachSharedbwReq } from './DetachSharedbwReq';


export class DetachShareBandwidthRequest {
    private 'publicip_id'?: string;
    public body?: DetachSharedbwReq;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): DetachShareBandwidthRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: DetachSharedbwReq): DetachShareBandwidthRequest {
        this['body'] = body;
        return this;
    }
}