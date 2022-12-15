

export class BwChangeToPeriodReq {
    private 'bandwidth_ids': Array<string> | undefined;
    public extendParam: object;
    public constructor(bandwidthIds?: any, extendParam?: any) { 
        this['bandwidth_ids'] = bandwidthIds;
        this['extendParam'] = extendParam;
    }
    public withBandwidthIds(bandwidthIds: Array<string>): BwChangeToPeriodReq {
        this['bandwidth_ids'] = bandwidthIds;
        return this;
    }
    public set bandwidthIds(bandwidthIds: Array<string> | undefined) {
        this['bandwidth_ids'] = bandwidthIds;
    }
    public get bandwidthIds() {
        return this['bandwidth_ids'];
    }
    public withExtendParam(extendParam: object): BwChangeToPeriodReq {
        this['extendParam'] = extendParam;
        return this;
    }
}