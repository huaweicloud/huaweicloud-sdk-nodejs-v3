import { AttachInternetBandwidth } from './AttachInternetBandwidth';


export class BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody {
    private 'global_eip_segments'?: Array<AttachInternetBandwidth>;
    public constructor(globalEipSegments?: Array<AttachInternetBandwidth>) { 
        this['global_eip_segments'] = globalEipSegments;
    }
    public withGlobalEipSegments(globalEipSegments: Array<AttachInternetBandwidth>): BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody {
        this['global_eip_segments'] = globalEipSegments;
        return this;
    }
    public set globalEipSegments(globalEipSegments: Array<AttachInternetBandwidth>  | undefined) {
        this['global_eip_segments'] = globalEipSegments;
    }
    public get globalEipSegments(): Array<AttachInternetBandwidth> | undefined {
        return this['global_eip_segments'];
    }
}