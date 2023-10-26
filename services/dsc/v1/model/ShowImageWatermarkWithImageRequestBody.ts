

export class ShowImageWatermarkWithImageRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ShowImageWatermarkWithImageRequestBody {
        this['file'] = file;
        return this;
    }
}