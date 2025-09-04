

export class QueryAppImageResponseDTO {
    private 'image_namespace'?: string;
    public name?: string;
    public tag?: string;
    public digest?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withImageNamespace(imageNamespace: string): QueryAppImageResponseDTO {
        this['image_namespace'] = imageNamespace;
        return this;
    }
    public set imageNamespace(imageNamespace: string  | undefined) {
        this['image_namespace'] = imageNamespace;
    }
    public get imageNamespace(): string | undefined {
        return this['image_namespace'];
    }
    public withName(name: string): QueryAppImageResponseDTO {
        this['name'] = name;
        return this;
    }
    public withTag(tag: string): QueryAppImageResponseDTO {
        this['tag'] = tag;
        return this;
    }
    public withDigest(digest: string): QueryAppImageResponseDTO {
        this['digest'] = digest;
        return this;
    }
    public withCreateTime(createTime: string): QueryAppImageResponseDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}