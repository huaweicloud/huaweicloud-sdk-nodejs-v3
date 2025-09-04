

export class QueryDataBaseRequestV3 {
    public databases?: Array<string>;
    private 'source_instance_id'?: string;
    public constructor() { 
    }
    public withDatabases(databases: Array<string>): QueryDataBaseRequestV3 {
        this['databases'] = databases;
        return this;
    }
    public withSourceInstanceId(sourceInstanceId: string): QueryDataBaseRequestV3 {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
}