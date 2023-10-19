import { BandwidthTypeEnum } from './BandwidthTypeEnum';


export class BandwidthType {
    private 'bandwidth_type'?: BandwidthTypeEnum;
    public constructor(bandwidthType?: BandwidthTypeEnum) { 
        this['bandwidth_type'] = bandwidthType;
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): BandwidthType {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
}