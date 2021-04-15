import { ServicePolicyRoleOption } from './ServicePolicyRoleOption';


export class CreateCloudServiceCustomPolicyRequestBody {
    public role: ServicePolicyRoleOption;
    public constructor(role?: any) { 
        this['role'] = role;
    }
    public withRole(role: ServicePolicyRoleOption): CreateCloudServiceCustomPolicyRequestBody {
        this['role'] = role;
        return this;
    }
}