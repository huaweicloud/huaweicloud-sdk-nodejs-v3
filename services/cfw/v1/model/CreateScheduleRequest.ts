import { ScheduleInfoDTO } from './ScheduleInfoDTO';


export class CreateScheduleRequest {
    private 'project_id'?: string;
    public body?: ScheduleInfoDTO;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateScheduleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ScheduleInfoDTO): CreateScheduleRequest {
        this['body'] = body;
        return this;
    }
}