

export class ErInstance {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'attachment_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ErInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ErInstance {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ErInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAttachmentId(attachmentId: string): ErInstance {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
}