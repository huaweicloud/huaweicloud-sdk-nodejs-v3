

export class ListNaAuthorizedNodesRequest {
    private 'na_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(naId?: string) { 
        this['na_id'] = naId;
    }
    public withNaId(naId: string): ListNaAuthorizedNodesRequest {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
    public withOffset(offset: number): ListNaAuthorizedNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNaAuthorizedNodesRequest {
        this['limit'] = limit;
        return this;
    }
}