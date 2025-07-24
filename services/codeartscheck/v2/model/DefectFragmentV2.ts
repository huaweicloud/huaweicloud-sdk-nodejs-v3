

export class DefectFragmentV2 {
    private 'line_num'?: string;
    private 'line_content'?: string;
    private 'start_offset'?: number;
    private 'end_offset'?: number;
    public constructor() { 
    }
    public withLineNum(lineNum: string): DefectFragmentV2 {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withLineContent(lineContent: string): DefectFragmentV2 {
        this['line_content'] = lineContent;
        return this;
    }
    public set lineContent(lineContent: string  | undefined) {
        this['line_content'] = lineContent;
    }
    public get lineContent(): string | undefined {
        return this['line_content'];
    }
    public withStartOffset(startOffset: number): DefectFragmentV2 {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: number  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): number | undefined {
        return this['start_offset'];
    }
    public withEndOffset(endOffset: number): DefectFragmentV2 {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: number  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): number | undefined {
        return this['end_offset'];
    }
}