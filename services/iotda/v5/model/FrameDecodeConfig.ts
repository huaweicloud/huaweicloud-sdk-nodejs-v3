

export class FrameDecodeConfig {
    private 'frame_decode_type'?: string;
    private 'max_frame_length'?: number;
    public delimiter?: string;
    private 'fixed_frame_length'?: number;
    private 'field_offset'?: number;
    private 'field_length'?: number;
    private 'initial_bytes'?: string;
    private 'adjustment_length'?: number;
    private 'initial_bytes_to_strip'?: number;
    public constructor() { 
    }
    public withFrameDecodeType(frameDecodeType: string): FrameDecodeConfig {
        this['frame_decode_type'] = frameDecodeType;
        return this;
    }
    public set frameDecodeType(frameDecodeType: string  | undefined) {
        this['frame_decode_type'] = frameDecodeType;
    }
    public get frameDecodeType(): string | undefined {
        return this['frame_decode_type'];
    }
    public withMaxFrameLength(maxFrameLength: number): FrameDecodeConfig {
        this['max_frame_length'] = maxFrameLength;
        return this;
    }
    public set maxFrameLength(maxFrameLength: number  | undefined) {
        this['max_frame_length'] = maxFrameLength;
    }
    public get maxFrameLength(): number | undefined {
        return this['max_frame_length'];
    }
    public withDelimiter(delimiter: string): FrameDecodeConfig {
        this['delimiter'] = delimiter;
        return this;
    }
    public withFixedFrameLength(fixedFrameLength: number): FrameDecodeConfig {
        this['fixed_frame_length'] = fixedFrameLength;
        return this;
    }
    public set fixedFrameLength(fixedFrameLength: number  | undefined) {
        this['fixed_frame_length'] = fixedFrameLength;
    }
    public get fixedFrameLength(): number | undefined {
        return this['fixed_frame_length'];
    }
    public withFieldOffset(fieldOffset: number): FrameDecodeConfig {
        this['field_offset'] = fieldOffset;
        return this;
    }
    public set fieldOffset(fieldOffset: number  | undefined) {
        this['field_offset'] = fieldOffset;
    }
    public get fieldOffset(): number | undefined {
        return this['field_offset'];
    }
    public withFieldLength(fieldLength: number): FrameDecodeConfig {
        this['field_length'] = fieldLength;
        return this;
    }
    public set fieldLength(fieldLength: number  | undefined) {
        this['field_length'] = fieldLength;
    }
    public get fieldLength(): number | undefined {
        return this['field_length'];
    }
    public withInitialBytes(initialBytes: string): FrameDecodeConfig {
        this['initial_bytes'] = initialBytes;
        return this;
    }
    public set initialBytes(initialBytes: string  | undefined) {
        this['initial_bytes'] = initialBytes;
    }
    public get initialBytes(): string | undefined {
        return this['initial_bytes'];
    }
    public withAdjustmentLength(adjustmentLength: number): FrameDecodeConfig {
        this['adjustment_length'] = adjustmentLength;
        return this;
    }
    public set adjustmentLength(adjustmentLength: number  | undefined) {
        this['adjustment_length'] = adjustmentLength;
    }
    public get adjustmentLength(): number | undefined {
        return this['adjustment_length'];
    }
    public withInitialBytesToStrip(initialBytesToStrip: number): FrameDecodeConfig {
        this['initial_bytes_to_strip'] = initialBytesToStrip;
        return this;
    }
    public set initialBytesToStrip(initialBytesToStrip: number  | undefined) {
        this['initial_bytes_to_strip'] = initialBytesToStrip;
    }
    public get initialBytesToStrip(): number | undefined {
        return this['initial_bytes_to_strip'];
    }
}