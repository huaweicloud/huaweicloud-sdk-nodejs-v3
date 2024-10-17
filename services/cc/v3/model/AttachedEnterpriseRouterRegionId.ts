

export class AttachedEnterpriseRouterRegionId {
    private 'attached_er_table_region_id'?: string;
    public constructor(attachedErTableRegionId?: string) { 
        this['attached_er_table_region_id'] = attachedErTableRegionId;
    }
    public withAttachedErTableRegionId(attachedErTableRegionId: string): AttachedEnterpriseRouterRegionId {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
        return this;
    }
    public set attachedErTableRegionId(attachedErTableRegionId: string  | undefined) {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
    }
    public get attachedErTableRegionId(): string | undefined {
        return this['attached_er_table_region_id'];
    }
}