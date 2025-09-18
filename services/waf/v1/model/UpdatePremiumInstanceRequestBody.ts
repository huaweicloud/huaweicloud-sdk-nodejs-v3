

export class UpdatePremiumInstanceRequestBody {
    public action?: string;
    public params?: Array<string>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpdatePremiumInstanceRequestBody {
        this['action'] = action;
        return this;
    }
    public withParams(params: Array<string>): UpdatePremiumInstanceRequestBody {
        this['params'] = params;
        return this;
    }
}