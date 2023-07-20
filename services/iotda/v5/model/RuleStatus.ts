

export class RuleStatus {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): RuleStatus {
        this['status'] = status;
        return this;
    }
}