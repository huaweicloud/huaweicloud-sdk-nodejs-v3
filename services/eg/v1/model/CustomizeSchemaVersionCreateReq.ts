

export class CustomizeSchemaVersionCreateReq {
    public definition?: string;
    public constructor() { 
    }
    public withDefinition(definition: string): CustomizeSchemaVersionCreateReq {
        this['definition'] = definition;
        return this;
    }
}