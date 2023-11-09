

export class DocumentQueryResponseResultSegments {
    public segment?: string;
    public constructor() { 
    }
    public withSegment(segment: string): DocumentQueryResponseResultSegments {
        this['segment'] = segment;
        return this;
    }
}