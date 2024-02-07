

export class UpdateGlobalEipSegmentRequestBodyGlobalEipSegment {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['description'] = description;
        return this;
    }
}