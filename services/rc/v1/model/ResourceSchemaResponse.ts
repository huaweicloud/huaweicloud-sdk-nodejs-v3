

export class ResourceSchemaResponse {
    public type?: string;
    public schema?: { [key: string]: object; };
    public constructor() { 
    }
    public withType(type: string): ResourceSchemaResponse {
        this['type'] = type;
        return this;
    }
    public withSchema(schema: { [key: string]: object; }): ResourceSchemaResponse {
        this['schema'] = schema;
        return this;
    }
}