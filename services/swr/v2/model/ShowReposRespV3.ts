

export class ShowReposRespV3 {
    public id?: number;
    public name?: string;
    public category?: string;
    public description?: string;
    public size?: number;
    private 'is_public'?: boolean;
    private 'num_images'?: number;
    private 'num_download'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'domain_name'?: string;
    public namespace?: string;
    public status?: boolean;
    public constructor(id?: number, name?: string, category?: string, description?: string, size?: number, isPublic?: boolean, numImages?: number, numDownload?: number, createdAt?: string, updatedAt?: string, domainName?: string, namespace?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['category'] = category;
        this['description'] = description;
        this['size'] = size;
        this['is_public'] = isPublic;
        this['num_images'] = numImages;
        this['num_download'] = numDownload;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['domain_name'] = domainName;
        this['namespace'] = namespace;
    }
    public withId(id: number): ShowReposRespV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowReposRespV3 {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ShowReposRespV3 {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ShowReposRespV3 {
        this['description'] = description;
        return this;
    }
    public withSize(size: number): ShowReposRespV3 {
        this['size'] = size;
        return this;
    }
    public withIsPublic(isPublic: boolean): ShowReposRespV3 {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withNumImages(numImages: number): ShowReposRespV3 {
        this['num_images'] = numImages;
        return this;
    }
    public set numImages(numImages: number  | undefined) {
        this['num_images'] = numImages;
    }
    public get numImages(): number | undefined {
        return this['num_images'];
    }
    public withNumDownload(numDownload: number): ShowReposRespV3 {
        this['num_download'] = numDownload;
        return this;
    }
    public set numDownload(numDownload: number  | undefined) {
        this['num_download'] = numDownload;
    }
    public get numDownload(): number | undefined {
        return this['num_download'];
    }
    public withCreatedAt(createdAt: string): ShowReposRespV3 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowReposRespV3 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDomainName(domainName: string): ShowReposRespV3 {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withNamespace(namespace: string): ShowReposRespV3 {
        this['namespace'] = namespace;
        return this;
    }
    public withStatus(status: boolean): ShowReposRespV3 {
        this['status'] = status;
        return this;
    }
}