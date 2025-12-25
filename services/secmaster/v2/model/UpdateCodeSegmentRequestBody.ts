

export class UpdateCodeSegmentRequestBody {
    private 'code_segment_name'?: string;
    public description?: string;
    public code?: string;
    public constructor() { 
    }
    public withCodeSegmentName(codeSegmentName: string): UpdateCodeSegmentRequestBody {
        this['code_segment_name'] = codeSegmentName;
        return this;
    }
    public set codeSegmentName(codeSegmentName: string  | undefined) {
        this['code_segment_name'] = codeSegmentName;
    }
    public get codeSegmentName(): string | undefined {
        return this['code_segment_name'];
    }
    public withDescription(description: string): UpdateCodeSegmentRequestBody {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): UpdateCodeSegmentRequestBody {
        this['code'] = code;
        return this;
    }
}