

export class ShowAccountRequest {
    public name?: string;
    public delegator?: string;
    public status?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ShowAccountRequest {
        this['name'] = name;
        return this;
    }
    public withDelegator(delegator: string): ShowAccountRequest {
        this['delegator'] = delegator;
        return this;
    }
    public withStatus(status: string): ShowAccountRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ShowAccountRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAccountRequest {
        this['limit'] = limit;
        return this;
    }
}