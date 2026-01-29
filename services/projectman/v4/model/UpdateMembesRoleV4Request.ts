import { UpdateMembersRoleV4RequestBody } from './UpdateMembersRoleV4RequestBody';


export class UpdateMembesRoleV4Request {
    private 'project_id'?: string;
    public body?: UpdateMembersRoleV4RequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateMembesRoleV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateMembersRoleV4RequestBody): UpdateMembesRoleV4Request {
        this['body'] = body;
        return this;
    }
}