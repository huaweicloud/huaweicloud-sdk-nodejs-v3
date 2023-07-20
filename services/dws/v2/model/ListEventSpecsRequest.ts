

export class ListEventSpecsRequest {
    private 'spec_name'?: string;
    public category?: string;
    public severity?: string;
    private 'source_type'?: string;
    public tag?: string;
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withSpecName(specName: string): ListEventSpecsRequest {
        this['spec_name'] = specName;
        return this;
    }
    public set specName(specName: string  | undefined) {
        this['spec_name'] = specName;
    }
    public get specName(): string | undefined {
        return this['spec_name'];
    }
    public withCategory(category: string): ListEventSpecsRequest {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): ListEventSpecsRequest {
        this['severity'] = severity;
        return this;
    }
    public withSourceType(sourceType: string): ListEventSpecsRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withTag(tag: string): ListEventSpecsRequest {
        this['tag'] = tag;
        return this;
    }
    public withOffset(offset: string): ListEventSpecsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListEventSpecsRequest {
        this['limit'] = limit;
        return this;
    }
}