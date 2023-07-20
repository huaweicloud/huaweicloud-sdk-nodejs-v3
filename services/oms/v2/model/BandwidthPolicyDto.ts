

export class BandwidthPolicyDto {
    public end?: string;
    private 'max_bandwidth'?: number;
    public start?: string;
    public constructor(end?: string, maxBandwidth?: number, start?: string) { 
        this['end'] = end;
        this['max_bandwidth'] = maxBandwidth;
        this['start'] = start;
    }
    public withEnd(end: string): BandwidthPolicyDto {
        this['end'] = end;
        return this;
    }
    public withMaxBandwidth(maxBandwidth: number): BandwidthPolicyDto {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withStart(start: string): BandwidthPolicyDto {
        this['start'] = start;
        return this;
    }
}