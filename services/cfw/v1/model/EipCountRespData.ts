

export class EipCountRespData {
    private 'eip_total'?: number;
    private 'eip_protected'?: number;
    private 'eip_protected_self'?: number;
    public constructor() { 
    }
    public withEipTotal(eipTotal: number): EipCountRespData {
        this['eip_total'] = eipTotal;
        return this;
    }
    public set eipTotal(eipTotal: number  | undefined) {
        this['eip_total'] = eipTotal;
    }
    public get eipTotal(): number | undefined {
        return this['eip_total'];
    }
    public withEipProtected(eipProtected: number): EipCountRespData {
        this['eip_protected'] = eipProtected;
        return this;
    }
    public set eipProtected(eipProtected: number  | undefined) {
        this['eip_protected'] = eipProtected;
    }
    public get eipProtected(): number | undefined {
        return this['eip_protected'];
    }
    public withEipProtectedSelf(eipProtectedSelf: number): EipCountRespData {
        this['eip_protected_self'] = eipProtectedSelf;
        return this;
    }
    public set eipProtectedSelf(eipProtectedSelf: number  | undefined) {
        this['eip_protected_self'] = eipProtectedSelf;
    }
    public get eipProtectedSelf(): number | undefined {
        return this['eip_protected_self'];
    }
}