

export class ShowKeystorePermissionRequest {
    private 'keystore_id'?: string;
    private 'page_size'?: number;
    public page?: string;
    public constructor(keystoreId?: string, pageSize?: number, page?: string) { 
        this['keystore_id'] = keystoreId;
        this['page_size'] = pageSize;
        this['page'] = page;
    }
    public withKeystoreId(keystoreId: string): ShowKeystorePermissionRequest {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withPageSize(pageSize: number): ShowKeystorePermissionRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPage(page: string): ShowKeystorePermissionRequest {
        this['page'] = page;
        return this;
    }
}