import { CreateReportProfileDto } from './CreateReportProfileDto';


export class CreateReportProfileRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public body?: CreateReportProfileDto;
    public constructor(projectId?: string, fwInstanceId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withProjectId(projectId: string): CreateReportProfileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): CreateReportProfileRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withBody(body: CreateReportProfileDto): CreateReportProfileRequest {
        this['body'] = body;
        return this;
    }
}