

export class Catalog {
    public id?: string;
    private 'catalog_zh'?: string;
    private 'catalog_en'?: string;
    public constructor() { 
    }
    public withId(id: string): Catalog {
        this['id'] = id;
        return this;
    }
    public withCatalogZh(catalogZh: string): Catalog {
        this['catalog_zh'] = catalogZh;
        return this;
    }
    public set catalogZh(catalogZh: string  | undefined) {
        this['catalog_zh'] = catalogZh;
    }
    public get catalogZh(): string | undefined {
        return this['catalog_zh'];
    }
    public withCatalogEn(catalogEn: string): Catalog {
        this['catalog_en'] = catalogEn;
        return this;
    }
    public set catalogEn(catalogEn: string  | undefined) {
        this['catalog_en'] = catalogEn;
    }
    public get catalogEn(): string | undefined {
        return this['catalog_en'];
    }
}