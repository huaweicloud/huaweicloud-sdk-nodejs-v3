

export class CheckitemCatalogModel {
    public uuid?: string;
    public name?: string;
    public constructor(uuid?: string, name?: string) { 
        this['uuid'] = uuid;
        this['name'] = name;
    }
    public withUuid(uuid: string): CheckitemCatalogModel {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): CheckitemCatalogModel {
        this['name'] = name;
        return this;
    }
}