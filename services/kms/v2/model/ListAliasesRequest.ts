

export class ListAliasesRequest {
    private 'key_id'?: string;
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): ListAliasesRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withLimit(limit: string): ListAliasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAliasesRequest {
        this['marker'] = marker;
        return this;
    }
}