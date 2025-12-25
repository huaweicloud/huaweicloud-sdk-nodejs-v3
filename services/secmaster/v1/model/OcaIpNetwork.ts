

export class OcaIpNetwork {
    private 'is_public'?: boolean;
    public partition?: string;
    public plane?: string;
    private 'vxlan_id'?: string;
    public constructor(isPublic?: boolean) { 
        this['is_public'] = isPublic;
    }
    public withIsPublic(isPublic: boolean): OcaIpNetwork {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withPartition(partition: string): OcaIpNetwork {
        this['partition'] = partition;
        return this;
    }
    public withPlane(plane: string): OcaIpNetwork {
        this['plane'] = plane;
        return this;
    }
    public withVxlanId(vxlanId: string): OcaIpNetwork {
        this['vxlan_id'] = vxlanId;
        return this;
    }
    public set vxlanId(vxlanId: string  | undefined) {
        this['vxlan_id'] = vxlanId;
    }
    public get vxlanId(): string | undefined {
        return this['vxlan_id'];
    }
}