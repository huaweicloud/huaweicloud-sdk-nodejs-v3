

export class UpdatePolicyRuleStatusRequestBody {
    public status?: number;
    public constructor(status?: number) { 
        this['status'] = status;
    }
    public withStatus(status: number): UpdatePolicyRuleStatusRequestBody {
        this['status'] = status;
        return this;
    }
}