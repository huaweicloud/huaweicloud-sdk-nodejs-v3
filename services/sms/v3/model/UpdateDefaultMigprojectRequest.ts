

export class UpdateDefaultMigprojectRequest {
    private 'mig_project_id': string | undefined;
    public constructor(migProjectId?: any) { 
        this['mig_project_id'] = migProjectId;
    }
    public withMigProjectId(migProjectId: string): UpdateDefaultMigprojectRequest {
        this['mig_project_id'] = migProjectId;
        return this;
    }
    public set migProjectId(migProjectId: string | undefined) {
        this['mig_project_id'] = migProjectId;
    }
    public get migProjectId() {
        return this['mig_project_id'];
    }
}