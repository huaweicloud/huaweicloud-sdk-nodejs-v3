

export class DeleteMigprojectRequest {
    private 'mig_project_id'?: string;
    public constructor(migProjectId?: string) { 
        this['mig_project_id'] = migProjectId;
    }
    public withMigProjectId(migProjectId: string): DeleteMigprojectRequest {
        this['mig_project_id'] = migProjectId;
        return this;
    }
    public set migProjectId(migProjectId: string  | undefined) {
        this['mig_project_id'] = migProjectId;
    }
    public get migProjectId(): string | undefined {
        return this['mig_project_id'];
    }
}