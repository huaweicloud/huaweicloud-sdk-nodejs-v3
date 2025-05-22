import { AddMemberRequestV4 } from './AddMemberRequestV4';


export class AddMemberV4Request {
    private 'project_id'?: string;
    public body?: AddMemberRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddMemberV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: AddMemberRequestV4): AddMemberV4Request {
        this['body'] = body;
        return this;
    }
}