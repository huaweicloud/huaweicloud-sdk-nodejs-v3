import { BandwidthSize } from './BandwidthSize';


export class UpdateSiteConnectionBandwidthSize {
    private 'bandwidth_size'?: number;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): UpdateSiteConnectionBandwidthSize {
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