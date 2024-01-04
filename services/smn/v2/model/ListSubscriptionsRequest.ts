

export class ListSubscriptionsRequest {
    public offset?: number;
    public limit?: number;
    public protocol?: string;
    public status?: number;
    public endpoint?: string;
    private 'fuzzy_remark'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withProtocol(protocol: string): ListSubscriptionsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStatus(status: number): ListSubscriptionsRequest {
        this['status'] = status;
        return this;
    }
    public withEndpoint(endpoint: string): ListSubscriptionsRequest {
        this['endpoint'] = endpoint;
        return this;
    }
    public withFuzzyRemark(fuzzyRemark: string): ListSubscriptionsRequest {
        this['fuzzy_remark'] = fuzzyRemark;
        return this;
    }
    public set fuzzyRemark(fuzzyRemark: string  | undefined) {
        this['fuzzy_remark'] = fuzzyRemark;
    }
    public get fuzzyRemark(): string | undefined {
        return this['fuzzy_remark'];
    }
}