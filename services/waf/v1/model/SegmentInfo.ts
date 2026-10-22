

export class SegmentInfo {
    public segment?: string;
    public category?: string;
    public position?: Array<number>;
    private 'lexicon_id'?: string;
    private 'lexicon_type'?: number;
    public constructor() { 
    }
    public withSegment(segment: string): SegmentInfo {
        this['segment'] = segment;
        return this;
    }
    public withCategory(category: string): SegmentInfo {
        this['category'] = category;
        return this;
    }
    public withPosition(position: Array<number>): SegmentInfo {
        this['position'] = position;
        return this;
    }
    public withLexiconId(lexiconId: string): SegmentInfo {
        this['lexicon_id'] = lexiconId;
        return this;
    }
    public set lexiconId(lexiconId: string  | undefined) {
        this['lexicon_id'] = lexiconId;
    }
    public get lexiconId(): string | undefined {
        return this['lexicon_id'];
    }
    public withLexiconType(lexiconType: number): SegmentInfo {
        this['lexicon_type'] = lexiconType;
        return this;
    }
    public set lexiconType(lexiconType: number  | undefined) {
        this['lexicon_type'] = lexiconType;
    }
    public get lexiconType(): number | undefined {
        return this['lexicon_type'];
    }
}