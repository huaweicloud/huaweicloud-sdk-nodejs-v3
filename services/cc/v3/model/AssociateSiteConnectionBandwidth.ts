import { BandwidthSize } from './BandwidthSize';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';


export class AssociateSiteConnectionBandwidth {
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_size'?: number;
    public constructor() { 
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): AssociateSiteConnectionBandwidth {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthSize(bandwidthSize: number): AssociateSiteConnectionBandwidth {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
}