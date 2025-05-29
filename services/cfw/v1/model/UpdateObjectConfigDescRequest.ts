import { ObjectInfoDto } from './ObjectInfoDto';


export class UpdateObjectConfigDescRequest {
    private 'project_id'?: string;
    public body?: ObjectInfoDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateObjectConfigDescRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ObjectInfoDto): UpdateObjectConfigDescRequest {
        this['body'] = body;
        return this;
    }
}