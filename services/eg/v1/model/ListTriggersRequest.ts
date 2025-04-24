

export class ListTriggersRequest {
    private 'func_urn'?: string;
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public constructor(funcUrn?: string) { 
        this['func_urn'] = funcUrn;
    }
    public withFuncUrn(funcUrn: string): ListTriggersRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withOffset(offset: number): ListTriggersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTriggersRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListTriggersRequest {
        this['sort'] = sort;
        return this;
    }
}