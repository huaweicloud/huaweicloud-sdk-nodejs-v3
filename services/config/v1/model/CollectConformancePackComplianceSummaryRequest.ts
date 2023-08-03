

export class CollectConformancePackComplianceSummaryRequest {
    public limit?: number;
    public marker?: string;
    private 'conformance_pack_name'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): CollectConformancePackComplianceSummaryRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): CollectConformancePackComplianceSummaryRequest {
        this['marker'] = marker;
        return this;
    }
    public withConformancePackName(conformancePackName: string): CollectConformancePackComplianceSummaryRequest {
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