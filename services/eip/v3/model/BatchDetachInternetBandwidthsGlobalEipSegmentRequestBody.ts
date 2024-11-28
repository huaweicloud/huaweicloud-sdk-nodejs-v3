import { DetachInternetBandwidth } from './DetachInternetBandwidth';


export class BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody {
    private 'global_eip_segments'?: Array<DetachInternetBandwidth>;
    public constructor(globalEipSegments?: Array<DetachInternetBandwidth>) { 
        this['global_eip_segments'] = globalEipSegments;
    }
    public withGlobalEipSegments(globalEipSegments: Array<DetachInternetBandwidth>): BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody {
        this['global_eip_segments'] = globalEipSegments;
        return this;
    }
    public set globalEipSegments(globalEipSegments: Array<DetachInternetBandwidth>  | undefined) {
        this['global_eip_segments'] = globalEipSegments;
    }
    public get globalEipSegments(): Array<DetachInternetBandwidth> | undefined {
        return this['global_eip_segments'];
    }
}