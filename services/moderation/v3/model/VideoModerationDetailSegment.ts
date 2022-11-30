

export class VideoModerationDetailSegment {
    public segment?: string;
    public constructor() { 
    }
    public withSegment(segment: string): VideoModerationDetailSegment {
        this['segment'] = segment;
        return this;
    }
}