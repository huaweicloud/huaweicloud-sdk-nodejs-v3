import { AgencyPolicyRoleOption } from './AgencyPolicyRoleOption';


export class CreateAgencyCustomPolicyRequestBody {
    public role?: AgencyPolicyRoleOption;
    public constructor(role?: AgencyPolicyRoleOption) { 
        this['role'] = role;
    }
    public withRole(role: AgencyPolicyRoleOption): CreateAgencyCustomPolicyRequestBody {
        this['role'] = role;
        return this;
    }
}