

export class TransJobRejectBody {
    public reason?: string;
    public constructor() { 
    }
    public withReason(reason: string): TransJobRejectBody {
        this['reason'] = reason;
        return this;
    }
}