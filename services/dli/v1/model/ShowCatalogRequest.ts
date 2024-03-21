

export class ShowCatalogRequest {
    private 'catalog_name'?: string;
    public constructor(catalogName?: string) { 
        this['catalog_name'] = catalogName;
    }
    public withCatalogName(catalogName: string): ShowCatalogRequest {
        this['catalog_name'] = catalogName;
        return this;
    }
    public set catalogName(catalogName: string  | undefined) {
        this['catalog_name'] = catalogName;
    }
    public get catalogName(): string | undefined {
        return this['catalog_name'];
    }
}