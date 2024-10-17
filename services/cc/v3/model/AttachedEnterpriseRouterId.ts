

export class AttachedEnterpriseRouterId {
    private 'attached_er_id'?: string;
    public constructor(attachedErId?: string) { 
        this['attached_er_id'] = attachedErId;
    }
    public withAttachedErId(attachedErId: string): AttachedEnterpriseRouterId {
        this['attached_er_id'] = attachedErId;
        return this;
    }
    public set attachedErId(attachedErId: string  | undefined) {
        this['attached_er_id'] = attachedErId;
    }
    public get attachedErId(): string | undefined {
        return this['attached_er_id'];
    }
}