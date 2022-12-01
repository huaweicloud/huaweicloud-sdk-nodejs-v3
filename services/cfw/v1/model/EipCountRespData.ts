

export class EipCountRespData {
    private 'object_id'?: string | undefined;
    private 'eip_total'?: number | undefined;
    private 'eip_protected'?: number | undefined;
    public constructor() { 
    }
    public withObjectId(objectId: string): EipCountRespData {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withEipTotal(eipTotal: number): EipCountRespData {
        this['eip_total'] = eipTotal;
        return this;
    }
    public set eipTotal(eipTotal: number | undefined) {
        this['eip_total'] = eipTotal;
    }
    public get eipTotal() {
        return this['eip_total'];
    }
    public withEipProtected(eipProtected: number): EipCountRespData {
        this['eip_protected'] = eipProtected;
        return this;
    }
    public set eipProtected(eipProtected: number | undefined) {
        this['eip_protected'] = eipProtected;
    }
    public get eipProtected() {
        return this['eip_protected'];
    }
}