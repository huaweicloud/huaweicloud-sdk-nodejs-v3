

export class ShowTableDataRequest {
    public instance?: string;
    public guid?: string;
    private 'data_connection_id'?: string;
    private 'source_type'?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    public queue?: string;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): ShowTableDataRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): ShowTableDataRequest {
        this['guid'] = guid;
        return this;
    }
    public withDataConnectionId(dataConnectionId: string): ShowTableDataRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withSourceType(sourceType: string): ShowTableDataRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withDatabase(database: string): ShowTableDataRequest {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ShowTableDataRequest {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ShowTableDataRequest {
        this['table'] = table;
        return this;
    }
    public withQueue(queue: string): ShowTableDataRequest {
        this['queue'] = queue;
        return this;
    }
}