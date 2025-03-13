

export class ReasonDTO {
    public reason?: string;
    public constructor(reason?: string) { 
        this['reason'] = reason;
    }
    public withReason(reason: string): ReasonDTO {
        this['reason'] = reason;
        return this;
    }
}