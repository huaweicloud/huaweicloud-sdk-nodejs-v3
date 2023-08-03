

export class ListConformancePacksRequest {
    public limit?: number;
    public marker?: string;
    private 'conformance_pack_name'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListConformancePacksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConformancePacksRequest {
        this['marker'] = marker;
        return this;
    }
    public withConformancePackName(conformancePackName: string): ListConformancePacksRequest {
        this['conformance_pack_name'] = conformancePackName;
        return this;
    }
    public set conformancePackName(conformancePackName: string  | undefined) {
        this['conformance_pack_name'] = conformancePackName;
    }
    public get conformancePackName(): string | undefined {
        return this['conformance_pack_name'];
    }
}