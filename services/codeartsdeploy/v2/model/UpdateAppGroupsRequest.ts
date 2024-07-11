import { UpdateAppGroupsRequestBody } from './UpdateAppGroupsRequestBody';


export class UpdateAppGroupsRequest {
    private 'project_id'?: string;
    private 'group_id'?: string;
    public body?: UpdateAppGroupsRequestBody;
    public constructor(projectId?: string, groupId?: string) { 
        this['project_id'] = projectId;
        this['group_id'] = groupId;
    }
    public withProjectId(projectId: string): UpdateAppGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: string): UpdateAppGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateAppGroupsRequestBody): UpdateAppGroupsRequest {
        this['body'] = body;
        return this;
    }
}