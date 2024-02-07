

export class DetachInternetBandwidthRequest {
    private 'global_eip_id'?: string;
    private 'force_unbind'?: boolean;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withGlobalEipId(globalEipId: string): DetachInternetBandwidthRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withForceUnbind(forceUnbind: boolean): DetachInternetBandwidthRequest {
        this['force_unbind'] = forceUnbind;
        return this;
    }
    public set forceUnbind(forceUnbind: boolean  | undefined) {
        this['force_unbind'] = forceUnbind;
    }
    public get forceUnbind(): boolean | undefined {
        return this['force_unbind'];
    }
}