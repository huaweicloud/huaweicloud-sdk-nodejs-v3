

export class ApiCatalogUpdateParaDTO {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ApiCatalogUpdateParaDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApiCatalogUpdateParaDTO {
        this['description'] = description;
        return this;
    }
}