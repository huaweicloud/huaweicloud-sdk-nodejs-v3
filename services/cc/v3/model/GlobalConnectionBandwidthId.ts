

export class GlobalConnectionBandwidthId {
    private 'global_connection_bandwidth_id'?: string;
    public constructor() { 
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): GlobalConnectionBandwidthId {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
}