import { BandwidthSize } from './BandwidthSize';
import { BandwidthType } from './BandwidthType';
import { BandwidthTypeEnum } from './BandwidthTypeEnum';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';


export class UpdateCentralNetworkConnection {
    private 'bandwidth_type'?: BandwidthTypeEnum;
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_size'?: number;
    public constructor(bandwidthType?: BandwidthTypeEnum) { 
        this['bandwidth_type'] = bandwidthType;
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): UpdateCentralNetworkConnection {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): UpdateCentralNetworkConnection {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthSize(bandwidthSize: number): UpdateCentralNetworkConnection {
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