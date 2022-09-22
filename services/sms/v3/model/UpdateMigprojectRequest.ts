import { MigProject } from './MigProject';


export class UpdateMigprojectRequest {
    private 'mig_project_id': string | undefined;
    public body?: MigProject;
    public constructor(migProjectId?: any) { 
        this['mig_project_id'] = migProjectId;
    }
    public withMigProjectId(migProjectId: string): UpdateMigprojectRequest {
        this['mig_project_id'] = migProjectId;
        return this;
    }
    public set migProjectId(migProjectId: string | undefined) {
        this['mig_project_id'] = migProjectId;
    }
    public get migProjectId() {
        return this['mig_project_id'];
    }
    public withBody(body: MigProject): UpdateMigprojectRequest {
        this['body'] = body;
        return this;
    }
}