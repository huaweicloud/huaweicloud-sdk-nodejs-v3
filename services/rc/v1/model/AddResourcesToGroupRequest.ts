import { AddResourcesRequestBody } from './AddResourcesRequestBody';


export class AddResourcesToGroupRequest {
    private 'group_id'?: string;
    public body?: AddResourcesRequestBody;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): AddResourcesToGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: AddResourcesRequestBody): AddResourcesToGroupRequest {
        this['body'] = body;
        return this;
    }
}