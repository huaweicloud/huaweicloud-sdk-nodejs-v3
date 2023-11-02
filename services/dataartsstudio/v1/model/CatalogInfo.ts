

export class CatalogInfo {
    public guid?: string;
    public constructor() { 
    }
    public withGuid(guid: string): CatalogInfo {
        this['guid'] = guid;
        return this;
    }
}