

export class DocumentVideoImageDetailSegments {
    public segment?: string;
    public constructor() { 
    }
    public withSegment(segment: string): DocumentVideoImageDetailSegments {
        this['segment'] = segment;
        return this;
    }
}