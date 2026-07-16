

export class UpdateIntranetConnectionRequestBody {
    public action?: string;
    public reason?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpdateIntranetConnectionRequestBody {
        this['action'] = action;
        return this;
    }
    public withReason(reason: string): UpdateIntranetConnectionRequestBody {
        this['reason'] = reason;
        return this;
    }
}