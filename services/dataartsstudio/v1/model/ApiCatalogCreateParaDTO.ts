

export class ApiCatalogCreateParaDTO {
    public pid?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withPid(pid: string): ApiCatalogCreateParaDTO {
        this['pid'] = pid;
        return this;
    }
    public withName(name: string): ApiCatalogCreateParaDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApiCatalogCreateParaDTO {
        this['description'] = description;
        return this;
    }
}