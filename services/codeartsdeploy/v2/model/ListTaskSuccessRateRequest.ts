import { TasksSuccessRateQuery } from './TasksSuccessRateQuery';


export class ListTaskSuccessRateRequest {
    private 'project_id': string | undefined;
    public body?: TasksSuccessRateQuery;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListTaskSuccessRateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: TasksSuccessRateQuery): ListTaskSuccessRateRequest {
        this['body'] = body;
        return this;
    }
}