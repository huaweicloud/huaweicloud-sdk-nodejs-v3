

export class CatalogAttributeVOParent {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CatalogAttributeVOParent {
        this['id'] = id;
        return this;
    }
}