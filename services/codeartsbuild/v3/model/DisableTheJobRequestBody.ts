

export class DisableTheJobRequestBody {
    public reason?: string;
    public disabled?: boolean;
    public constructor(disabled?: boolean) { 
        this['disabled'] = disabled;
    }
    public withReason(reason: string): DisableTheJobRequestBody {
        this['reason'] = reason;
        return this;
    }
    public withDisabled(disabled: boolean): DisableTheJobRequestBody {
        this['disabled'] = disabled;
        return this;
    }
}