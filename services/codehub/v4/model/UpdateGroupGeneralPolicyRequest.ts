import { UpdateGeneralPolicyDto } from './UpdateGeneralPolicyDto';


export class UpdateGroupGeneralPolicyRequest {
    private 'group_id'?: number;
    public body?: UpdateGeneralPolicyDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): UpdateGroupGeneralPolicyRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateGeneralPolicyDto): UpdateGroupGeneralPolicyRequest {
        this['body'] = body;
        return this;
    }
}