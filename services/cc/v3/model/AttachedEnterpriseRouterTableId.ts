

export class AttachedEnterpriseRouterTableId {
    private 'attached_er_table_id'?: string;
    public constructor(attachedErTableId?: string) { 
        this['attached_er_table_id'] = attachedErTableId;
    }
    public withAttachedErTableId(attachedErTableId: string): AttachedEnterpriseRouterTableId {
        this['attached_er_table_id'] = attachedErTableId;
        return this;
    }
    public set attachedErTableId(attachedErTableId: string  | undefined) {
        this['attached_er_table_id'] = attachedErTableId;
    }
    public get attachedErTableId(): string | undefined {
        return this['attached_er_table_id'];
    }
}