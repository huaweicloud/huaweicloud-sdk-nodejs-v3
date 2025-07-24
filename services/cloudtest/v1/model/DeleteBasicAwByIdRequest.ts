

export class DeleteBasicAwByIdRequest {
    private 'project_id'?: string;
    private 'aw_id'?: string;
    public constructor(projectId?: string, awId?: string) { 
        this['project_id'] = projectId;
        this['aw_id'] = awId;
    }
    public withProjectId(projectId: string): DeleteBasicAwByIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAwId(awId: string): DeleteBasicAwByIdRequest {
        this['aw_id'] = awId;
        return this;
    }
    public set awId(awId: string  | undefined) {
        this['aw_id'] = awId;
    }
    public get awId(): string | undefined {
        return this['aw_id'];
    }
}