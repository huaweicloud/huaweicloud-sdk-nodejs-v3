

export class AudioModerationResultResultSegments {
    public segment?: string;
    public constructor() { 
    }
    public withSegment(segment: string): AudioModerationResultResultSegments {
        this['segment'] = segment;
        return this;
    }
}