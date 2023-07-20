

export class SegmentResult {
    public segment?: string;
    private 'glossary_name'?: string;
    public constructor() { 
    }
    public withSegment(segment: string): SegmentResult {
        this['segment'] = segment;
        return this;
    }
    public withGlossaryName(glossaryName: string): SegmentResult {
        this['glossary_name'] = glossaryName;
        return this;
    }
    public set glossaryName(glossaryName: string  | undefined) {
        this['glossary_name'] = glossaryName;
    }
    public get glossaryName(): string | undefined {
        return this['glossary_name'];
    }
}