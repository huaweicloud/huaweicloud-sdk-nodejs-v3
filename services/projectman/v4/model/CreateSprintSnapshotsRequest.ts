import { SprintSnapshotsCreateParam } from './SprintSnapshotsCreateParam';


export class CreateSprintSnapshotsRequest {
    private 'project_id'?: string;
    public body?: SprintSnapshotsCreateParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateSprintSnapshotsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: SprintSnapshotsCreateParam): CreateSprintSnapshotsRequest {
        this['body'] = body;
        return this;
    }
}