

export class DisassociateInstanceRequest {
    private 'is_reserve_gcb'?: boolean;
    private 'global_eip_id'?: string;
    public constructor(isReserveGcb?: boolean, globalEipId?: string) { 
        this['is_reserve_gcb'] = isReserveGcb;
        this['global_eip_id'] = globalEipId;
    }
    public withIsReserveGcb(isReserveGcb: boolean): DisassociateInstanceRequest {
        this['is_reserve_gcb'] = isReserveGcb;
        return this;
    }
    public set isReserveGcb(isReserveGcb: boolean  | undefined) {
        this['is_reserve_gcb'] = isReserveGcb;
    }
    public get isReserveGcb(): boolean | undefined {
        return this['is_reserve_gcb'];
    }
    public withGlobalEipId(globalEipId: string): DisassociateInstanceRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
}