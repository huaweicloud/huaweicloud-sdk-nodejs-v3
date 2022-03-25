

export class ShowReposResp {
    public name: string;
    public category: string;
    public description: string;
    public size: number;
    private 'is_public': boolean | undefined;
    private 'num_images': number | undefined;
    private 'num_download': number | undefined;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    public logo: string;
    public url: string;
    public path: string;
    private 'internal_path': string | undefined;
    private 'domain_name': string | undefined;
    public namespace: string;
    public tags: Array<string>;
    public status: boolean;
    private 'total_range': number | undefined;
    public constructor(name?: any, category?: any, description?: any, size?: any, isPublic?: any, numImages?: any, numDownload?: any, createdAt?: any, updatedAt?: any, logo?: any, url?: any, path?: any, internalPath?: any, domainName?: any, namespace?: any, tags?: any, status?: any, totalRange?: any) { 
        this['name'] = name;
        this['category'] = category;
        this['description'] = description;
        this['size'] = size;
        this['is_public'] = isPublic;
        this['num_images'] = numImages;
        this['num_download'] = numDownload;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['logo'] = logo;
        this['url'] = url;
        this['path'] = path;
        this['internal_path'] = internalPath;
        this['domain_name'] = domainName;
        this['namespace'] = namespace;
        this['tags'] = tags;
        this['status'] = status;
        this['total_range'] = totalRange;
    }
    public withName(name: string): ShowReposResp {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ShowReposResp {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ShowReposResp {
        this['description'] = description;
        return this;
    }
    public withSize(size: number): ShowReposResp {
        this['size'] = size;
        return this;
    }
    public withIsPublic(isPublic: boolean): ShowReposResp {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic() {
        return this['is_public'];
    }
    public withNumImages(numImages: number): ShowReposResp {
        this['num_images'] = numImages;
        return this;
    }
    public set numImages(numImages: number | undefined) {
        this['num_images'] = numImages;
    }
    public get numImages() {
        return this['num_images'];
    }
    public withNumDownload(numDownload: number): ShowReposResp {
        this['num_download'] = numDownload;
        return this;
    }
    public set numDownload(numDownload: number | undefined) {
        this['num_download'] = numDownload;
    }
    public get numDownload() {
        return this['num_download'];
    }
    public withCreatedAt(createdAt: string): ShowReposResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowReposResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withLogo(logo: string): ShowReposResp {
        this['logo'] = logo;
        return this;
    }
    public withUrl(url: string): ShowReposResp {
        this['url'] = url;
        return this;
    }
    public withPath(path: string): ShowReposResp {
        this['path'] = path;
        return this;
    }
    public withInternalPath(internalPath: string): ShowReposResp {
        this['internal_path'] = internalPath;
        return this;
    }
    public set internalPath(internalPath: string | undefined) {
        this['internal_path'] = internalPath;
    }
    public get internalPath() {
        return this['internal_path'];
    }
    public withDomainName(domainName: string): ShowReposResp {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withNamespace(namespace: string): ShowReposResp {
        this['namespace'] = namespace;
        return this;
    }
    public withTags(tags: Array<string>): ShowReposResp {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: boolean): ShowReposResp {
        this['status'] = status;
        return this;
    }
    public withTotalRange(totalRange: number): ShowReposResp {
        this['total_range'] = totalRange;
        return this;
    }
    public set totalRange(totalRange: number | undefined) {
        this['total_range'] = totalRange;
    }
    public get totalRange() {
        return this['total_range'];
    }
}