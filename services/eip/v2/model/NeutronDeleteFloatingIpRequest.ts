

export class NeutronDeleteFloatingIpRequest {
    private 'floatingip_id': string | undefined;
    public constructor(floatingipId?: any) { 
        this['floatingip_id'] = floatingipId;
    }
    public withFloatingipId(floatingipId: string): NeutronDeleteFloatingIpRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId() {
        return this['floatingip_id'];
    }
}