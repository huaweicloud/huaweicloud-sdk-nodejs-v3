

export class CocUpdateChangeRequestBodyHistoryInfo {
    public action?: string;
    public constructor() { 
    }
    public withAction(action: string): CocUpdateChangeRequestBodyHistoryInfo {
        this['action'] = action;
        return this;
    }
}