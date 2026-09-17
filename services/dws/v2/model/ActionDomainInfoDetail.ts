

export class ActionDomainInfoDetail {
    public action?: string;
    public description?: string;
    public constructor() { 
    }
    public withAction(action: string): ActionDomainInfoDetail {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): ActionDomainInfoDetail {
        this['description'] = description;
        return this;
    }
}