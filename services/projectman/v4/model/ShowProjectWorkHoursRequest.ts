import { ShowProjectWorkHoursRequestBody } from './ShowProjectWorkHoursRequestBody';


export class ShowProjectWorkHoursRequest {
    private 'project_id'?: string;
    public body?: ShowProjectWorkHoursRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowProjectWorkHoursRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ShowProjectWorkHoursRequestBody): ShowProjectWorkHoursRequest {
        this['body'] = body;
        return this;
    }
}