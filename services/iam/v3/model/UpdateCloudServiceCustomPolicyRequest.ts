import { UpdateCloudServiceCustomPolicyRequestBody } from './UpdateCloudServiceCustomPolicyRequestBody';


export class UpdateCloudServiceCustomPolicyRequest {
    private 'role_id'?: string;
    public body?: UpdateCloudServiceCustomPolicyRequestBody;
    public constructor(roleId?: string) { 
        this['role_id'] = roleId;
    }
    public withRoleId(roleId: string): UpdateCloudServiceCustomPolicyRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withBody(body: UpdateCloudServiceCustomPolicyRequestBody): UpdateCloudServiceCustomPolicyRequest {
        this['body'] = body;
        return this;
    }
}