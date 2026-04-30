

export class ListCcspTenantImagesRequest {
    public limit?: number;
    public offset?: number;
    private 'image_name'?: string;
    private 'service_type'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCcspTenantImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCcspTenantImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageName(imageName: string): ListCcspTenantImagesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withServiceType(serviceType: string): ListCcspTenantImagesRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withSortKey(sortKey: string): ListCcspTenantImagesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCcspTenantImagesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}