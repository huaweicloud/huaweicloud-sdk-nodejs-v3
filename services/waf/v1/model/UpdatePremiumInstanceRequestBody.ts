

export class UpdatePremiumInstanceRequestBody {
    public action?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpdatePremiumInstanceRequestBody {
        this['action'] = action;
        return this;
    }
}