

export class BandwidthInfoResp {
    private 'bandwidth_name'?: string;
    private 'bandwidth_number'?: number;
    private 'bandwidth_type'?: BandwidthInfoRespBandwidthTypeEnum | string;
    private 'bandwidth_id'?: string;
    public constructor() { 
    }
    public withBandwidthName(bandwidthName: string): BandwidthInfoResp {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthNumber(bandwidthNumber: number): BandwidthInfoResp {
        this['bandwidth_number'] = bandwidthNumber;
        return this;
    }
    public set bandwidthNumber(bandwidthNumber: number  | undefined) {
        this['bandwidth_number'] = bandwidthNumber;
    }
    public get bandwidthNumber(): number | undefined {
        return this['bandwidth_number'];
    }
    public withBandwidthType(bandwidthType: BandwidthInfoRespBandwidthTypeEnum | string): BandwidthInfoResp {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthInfoRespBandwidthTypeEnum | string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthInfoRespBandwidthTypeEnum | string | undefined {
        return this['bandwidth_type'];
    }
    public withBandwidthId(bandwidthId: string): BandwidthInfoResp {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthInfoRespBandwidthTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
