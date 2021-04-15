import { AgencyPolicyRoleOption } from './AgencyPolicyRoleOption';


export class UpdateAgencyCustomPolicyRequestBody {
    public role: AgencyPolicyRoleOption;
    public constructor(role?: any) { 
        this['role'] = role;
    }
    public withRole(role: AgencyPolicyRoleOption): UpdateAgencyCustomPolicyRequestBody {
        this['role'] = role;
        return this;
    }
}