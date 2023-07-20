

export class NeutronShowFloatingIpRequest {
    private 'floatingip_id'?: string;
    public constructor(floatingipId?: string) { 
        this['floatingip_id'] = floatingipId;
    }
    public withFloatingipId(floatingipId: string): NeutronShowFloatingIpRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string  | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId(): string | undefined {
        return this['floatingip_id'];
    }
}