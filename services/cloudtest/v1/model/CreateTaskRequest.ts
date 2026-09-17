import { TaskInfo } from './TaskInfo';


export class CreateTaskRequest {
    private 'project_uuid'?: string;
    public body?: TaskInfo;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withProjectUuid(projectUuid: string): CreateTaskRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withBody(body: TaskInfo): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}