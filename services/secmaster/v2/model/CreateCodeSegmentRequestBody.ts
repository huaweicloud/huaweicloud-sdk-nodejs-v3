

export class CreateCodeSegmentRequestBody {
    private 'code_segment_name'?: string;
    public description?: string;
    public code?: string;
    public constructor(codeSegmentName?: string, code?: string) { 
        this['code_segment_name'] = codeSegmentName;
        this['code'] = code;
    }
    public withCodeSegmentName(codeSegmentName: string): CreateCodeSegmentRequestBody {
        this['code_segment_name'] = codeSegmentName;
        return this;
    }
    public set codeSegmentName(codeSegmentName: string  | undefined) {
        this['code_segment_name'] = codeSegmentName;
    }
    public get codeSegmentName(): string | undefined {
        return this['code_segment_name'];
    }
    public withDescription(description: string): CreateCodeSegmentRequestBody {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): CreateCodeSegmentRequestBody {
        this['code'] = code;
        return this;
    }
}