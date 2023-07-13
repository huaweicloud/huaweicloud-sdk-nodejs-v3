

export class BandwidthPolicyDto {
    public end: string;
    private 'max_bandwidth': number | undefined;
    public start: string;
    public constructor(end?: any, maxBandwidth?: any, start?: any) { 
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
    public set maxBandwidth(maxBandwidth: number | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth() {
        return this['max_bandwidth'];
    }
    public withStart(start: string): BandwidthPolicyDto {
        this['start'] = start;
        return this;
    }
}