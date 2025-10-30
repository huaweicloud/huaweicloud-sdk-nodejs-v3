

export class VulRepoImagesTagInfo {
    private 'tag_id'?: string;
    private 'tag_name'?: string;
    public size?: number;
    private 'app_name'?: string;
    public constructor() { 
    }
    public withTagId(tagId: string): VulRepoImagesTagInfo {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withTagName(tagName: string): VulRepoImagesTagInfo {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withSize(size: number): VulRepoImagesTagInfo {
        this['size'] = size;
        return this;
    }
    public withAppName(appName: string): VulRepoImagesTagInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}