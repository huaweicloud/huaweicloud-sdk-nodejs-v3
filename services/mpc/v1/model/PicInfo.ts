

export class PicInfo {
    private 'pic_name'?: string;
    public constructor() { 
    }
    public withPicName(picName: string): PicInfo {
        this['pic_name'] = picName;
        return this;
    }
    public set picName(picName: string  | undefined) {
        this['pic_name'] = picName;
    }
    public get picName(): string | undefined {
        return this['pic_name'];
    }
}