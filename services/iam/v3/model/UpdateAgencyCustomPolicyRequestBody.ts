import { AgencyPolicyRoleOption } from './AgencyPolicyRoleOption';


export class UpdateAgencyCustomPolicyRequestBody {
    public role?: AgencyPolicyRoleOption;
    public constructor(role?: AgencyPolicyRoleOption) { 
        this['role'] = role;
    }
    public withRole(role: AgencyPolicyRoleOption): UpdateAgencyCustomPolicyRequestBody {
        this['role'] = role;
        return this;
    }
}