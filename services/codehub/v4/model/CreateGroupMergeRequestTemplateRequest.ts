import { CreateMergeRequestTemplateDto } from './CreateMergeRequestTemplateDto';


export class CreateGroupMergeRequestTemplateRequest {
    private 'group_id'?: number;
    public body?: CreateMergeRequestTemplateDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): CreateGroupMergeRequestTemplateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: CreateMergeRequestTemplateDto): CreateGroupMergeRequestTemplateRequest {
        this['body'] = body;
        return this;
    }
}