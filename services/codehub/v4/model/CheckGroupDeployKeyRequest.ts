import { DeployKeyValueDto } from './DeployKeyValueDto';


export class CheckGroupDeployKeyRequest {
    private 'group_id'?: number;
    public body?: DeployKeyValueDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): CheckGroupDeployKeyRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: DeployKeyValueDto): CheckGroupDeployKeyRequest {
        this['body'] = body;
        return this;
    }
}