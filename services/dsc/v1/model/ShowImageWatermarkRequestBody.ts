

export class ShowImageWatermarkRequestBody {
    public file?: any;
    private 'mark_len'?: string;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ShowImageWatermarkRequestBody {
        this['file'] = file;
        return this;
    }
    public withMarkLen(markLen: string): ShowImageWatermarkRequestBody {
        this['mark_len'] = markLen;
        return this;
    }
    public set markLen(markLen: string  | undefined) {
        this['mark_len'] = markLen;
    }
    public get markLen(): string | undefined {
        return this['mark_len'];
    }
}