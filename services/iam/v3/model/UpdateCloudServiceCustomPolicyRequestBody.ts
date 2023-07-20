import { ServicePolicyRoleOption } from './ServicePolicyRoleOption';


export class UpdateCloudServiceCustomPolicyRequestBody {
    public role?: ServicePolicyRoleOption;
    public constructor(role?: ServicePolicyRoleOption) { 
        this['role'] = role;
    }
    public withRole(role: ServicePolicyRoleOption): UpdateCloudServiceCustomPolicyRequestBody {
        this['role'] = role;
        return this;
    }
}