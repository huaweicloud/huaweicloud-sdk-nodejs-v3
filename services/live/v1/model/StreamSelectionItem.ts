

export class StreamSelectionItem {
    public key?: string;
    private 'max_bandwidth'?: number;
    private 'min_bandwidth'?: number;
    public constructor() { 
    }
    public withKey(key: string): StreamSelectionItem {
        this['key'] = key;
        return this;
    }
    public withMaxBandwidth(maxBandwidth: number): StreamSelectionItem {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withMinBandwidth(minBandwidth: number): StreamSelectionItem {
        this['min_bandwidth'] = minBandwidth;
        return this;
    }
    public set minBandwidth(minBandwidth: number  | undefined) {
        this['min_bandwidth'] = minBandwidth;
    }
    public get minBandwidth(): number | undefined {
        return this['min_bandwidth'];
    }
}