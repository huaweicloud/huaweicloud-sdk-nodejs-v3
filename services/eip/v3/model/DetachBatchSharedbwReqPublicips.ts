import { DetachSharedbwDict } from './DetachSharedbwDict';


export class DetachBatchSharedbwReqPublicips {
    private 'publicip_id'?: string;
    public bandwidth?: DetachSharedbwDict;
    public constructor(publicipId?: string, bandwidth?: DetachSharedbwDict) { 
        this['publicip_id'] = publicipId;
        this['bandwidth'] = bandwidth;
    }
    public withPublicipId(publicipId: string): DetachBatchSharedbwReqPublicips {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBandwidth(bandwidth: DetachSharedbwDict): DetachBatchSharedbwReqPublicips {
        this['bandwidth'] = bandwidth;
        return this;
    }
}