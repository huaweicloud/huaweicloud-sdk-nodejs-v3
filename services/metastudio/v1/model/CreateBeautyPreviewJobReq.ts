

export class CreateBeautyPreviewJobReq {
    public name?: string;
    public level?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateBeautyPreviewJobReq {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): CreateBeautyPreviewJobReq {
        this['level'] = level;
        return this;
    }
}