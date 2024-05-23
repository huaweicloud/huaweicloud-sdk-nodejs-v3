

export class PolicyTypeSummaryDto {
    public status?: string;
    public type?: string;
    public constructor(status?: string, type?: string) { 
        this['status'] = status;
        this['type'] = type;
    }
    public withStatus(status: string): PolicyTypeSummaryDto {
        this['status'] = status;
        return this;
    }
    public withType(type: string): PolicyTypeSummaryDto {
        this['type'] = type;
        return this;
    }
}