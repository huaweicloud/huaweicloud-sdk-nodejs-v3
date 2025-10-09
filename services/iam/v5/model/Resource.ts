

export class Resource {
    private 'type_name'?: string;
    private 'urn_template'?: string;
    public constructor(typeName?: string, urnTemplate?: string) { 
        this['type_name'] = typeName;
        this['urn_template'] = urnTemplate;
    }
    public withTypeName(typeName: string): Resource {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withUrnTemplate(urnTemplate: string): Resource {
        this['urn_template'] = urnTemplate;
        return this;
    }
    public set urnTemplate(urnTemplate: string  | undefined) {
        this['urn_template'] = urnTemplate;
    }
    public get urnTemplate(): string | undefined {
        return this['urn_template'];
    }
}