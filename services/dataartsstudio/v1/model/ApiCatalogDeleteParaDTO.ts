

export class ApiCatalogDeleteParaDTO {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ApiCatalogDeleteParaDTO {
        this['ids'] = ids;
        return this;
    }
}