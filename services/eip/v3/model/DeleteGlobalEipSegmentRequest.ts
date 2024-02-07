

export class DeleteGlobalEipSegmentRequest {
    private 'global_eip_segment_id'?: string;
    public constructor(globalEipSegmentId?: string) { 
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): DeleteGlobalEipSegmentRequest {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
}