

export class ListDDosStatusRequest {
    public status?: string;
    public limit?: string;
    public offset?: string;
    public ips?: string;
    public constructor() { 
    }
    public withStatus(status: string): ListDDosStatusRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: string): ListDDosStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDDosStatusRequest {
        this['offset'] = offset;
        return this;
    }
    public withIps(ips: string): ListDDosStatusRequest {
        this['ips'] = ips;
        return this;
    }
}