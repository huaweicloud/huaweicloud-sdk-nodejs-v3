import { AttachInternetBandwidthGlobalEipRequestBody } from './AttachInternetBandwidthGlobalEipRequestBody';


export class AttachInternetBandwidthRequest {
    private 'global_eip_id'?: string;
    public body?: AttachInternetBandwidthGlobalEipRequestBody;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withGlobalEipId(globalEipId: string): AttachInternetBandwidthRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withBody(body: AttachInternetBandwidthGlobalEipRequestBody): AttachInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}