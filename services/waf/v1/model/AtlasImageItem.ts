

export class AtlasImageItem {
    private 'image_id'?: string;
    public name?: string;
    public url?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withImageId(imageId: string): AtlasImageItem {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withName(name: string): AtlasImageItem {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): AtlasImageItem {
        this['url'] = url;
        return this;
    }
    public withCreateTime(createTime: number): AtlasImageItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}