

export class ShowConformancePackRequest {
    private 'conformance_pack_id'?: string;
    public constructor(conformancePackId?: string) { 
        this['conformance_pack_id'] = conformancePackId;
    }
    public withConformancePackId(conformancePackId: string): ShowConformancePackRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
}