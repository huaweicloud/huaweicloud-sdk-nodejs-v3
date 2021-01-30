import { UpdateAgencyCustomPolicyRequestBody } from './UpdateAgencyCustomPolicyRequestBody';


export class UpdateAgencyCustomPolicyRequest {
    private 'role_id': string | undefined;
    public body?: UpdateAgencyCustomPolicyRequestBody;
    public constructor(roleId: any) { 
        this['role_id'] = roleId;
    }
    public withRoleId(roleId: string): UpdateAgencyCustomPolicyRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
        return this['role_id'];
    }
    public withBody(body: UpdateAgencyCustomPolicyRequestBody): UpdateAgencyCustomPolicyRequest {
        this['body'] = body;
        return this;
    }
}