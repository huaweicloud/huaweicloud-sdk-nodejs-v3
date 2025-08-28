

export class DocumentSegmentParam {
    private 'split_type'?: number;
    private 'chunk_size'?: number;
    private 'chunk_type'?: string;
    public separators?: Array<string>;
    public constructor(splitType?: number) { 
        this['split_type'] = splitType;
    }
    public withSplitType(splitType: number): DocumentSegmentParam {
        this['split_type'] = splitType;
        return this;
    }
    public set splitType(splitType: number  | undefined) {
        this['split_type'] = splitType;
    }
    public get splitType(): number | undefined {
        return this['split_type'];
    }
    public withChunkSize(chunkSize: number): DocumentSegmentParam {
        this['chunk_size'] = chunkSize;
        return this;
    }
    public set chunkSize(chunkSize: number  | undefined) {
        this['chunk_size'] = chunkSize;
    }
    public get chunkSize(): number | undefined {
        return this['chunk_size'];
    }
    public withChunkType(chunkType: string): DocumentSegmentParam {
        this['chunk_type'] = chunkType;
        return this;
    }
    public set chunkType(chunkType: string  | undefined) {
        this['chunk_type'] = chunkType;
    }
    public get chunkType(): string | undefined {
        return this['chunk_type'];
    }
    public withSeparators(separators: Array<string>): DocumentSegmentParam {
        this['separators'] = separators;
        return this;
    }
}