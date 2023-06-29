

export class ResourceSchemaResponse {
    public type?: string;
    public schema?: object;
    public constructor() { 
    }
    public withType(type: string): ResourceSchemaResponse {
        this['type'] = type;
        return this;
    }
    public withSchema(schema: object): ResourceSchemaResponse {
        this['schema'] = schema;
        return this;
    }
}