

export class LayerPath {
    private 'catalog_id'?: string;
    public name?: string;
    public order?: number;
    public constructor() { 
    }
    public withCatalogId(catalogId: string): LayerPath {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withName(name: string): LayerPath {
        this['name'] = name;
        return this;
    }
    public withOrder(order: number): LayerPath {
        this['order'] = order;
        return this;
    }
}