

export class UpdatePolicyRuleStatusRequestBody {
    public status?: number;
    public constructor() { 
    }
    public withStatus(status: number): UpdatePolicyRuleStatusRequestBody {
        this['status'] = status;
        return this;
    }
}