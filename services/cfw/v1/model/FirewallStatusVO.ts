

export class FirewallStatusVO {
    private 'available_eip_count'?: number;
    private 'beyond_max_count'?: boolean;
    private 'eip_protected_self'?: number;
    private 'eip_total'?: number;
    private 'eip_un_protected'?: number;
    private 'object_id'?: string;
    public status?: number;
    public constructor() { 
    }
    public withAvailableEipCount(availableEipCount: number): FirewallStatusVO {
        this['available_eip_count'] = availableEipCount;
        return this;
    }
    public set availableEipCount(availableEipCount: number  | undefined) {
        this['available_eip_count'] = availableEipCount;
    }
    public get availableEipCount(): number | undefined {
        return this['available_eip_count'];
    }
    public withBeyondMaxCount(beyondMaxCount: boolean): FirewallStatusVO {
        this['beyond_max_count'] = beyondMaxCount;
        return this;
    }
    public set beyondMaxCount(beyondMaxCount: boolean  | undefined) {
        this['beyond_max_count'] = beyondMaxCount;
    }
    public get beyondMaxCount(): boolean | undefined {
        return this['beyond_max_count'];
    }
    public withEipProtectedSelf(eipProtectedSelf: number): FirewallStatusVO {
        this['eip_protected_self'] = eipProtectedSelf;
        return this;
    }
    public set eipProtectedSelf(eipProtectedSelf: number  | undefined) {
        this['eip_protected_self'] = eipProtectedSelf;
    }
    public get eipProtectedSelf(): number | undefined {
        return this['eip_protected_self'];
    }
    public withEipTotal(eipTotal: number): FirewallStatusVO {
        this['eip_total'] = eipTotal;
        return this;
    }
    public set eipTotal(eipTotal: number  | undefined) {
        this['eip_total'] = eipTotal;
    }
    public get eipTotal(): number | undefined {
        return this['eip_total'];
    }
    public withEipUnProtected(eipUnProtected: number): FirewallStatusVO {
        this['eip_un_protected'] = eipUnProtected;
        return this;
    }
    public set eipUnProtected(eipUnProtected: number  | undefined) {
        this['eip_un_protected'] = eipUnProtected;
    }
    public get eipUnProtected(): number | undefined {
        return this['eip_un_protected'];
    }
    public withObjectId(objectId: string): FirewallStatusVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withStatus(status: number): FirewallStatusVO {
        this['status'] = status;
        return this;
    }
}