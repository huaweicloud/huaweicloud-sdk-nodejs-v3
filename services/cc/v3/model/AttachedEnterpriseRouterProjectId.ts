

export class AttachedEnterpriseRouterProjectId {
    private 'attached_er_table_project_id'?: string;
    public constructor(attachedErTableProjectId?: string) { 
        this['attached_er_table_project_id'] = attachedErTableProjectId;
    }
    public withAttachedErTableProjectId(attachedErTableProjectId: string): AttachedEnterpriseRouterProjectId {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
        return this;
    }
    public set attachedErTableProjectId(attachedErTableProjectId: string  | undefined) {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
    }
    public get attachedErTableProjectId(): string | undefined {
        return this['attached_er_table_project_id'];
    }
}