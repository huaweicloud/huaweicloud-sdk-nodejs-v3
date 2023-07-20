

export class DatastoreResult {
    private 'node_type'?: string;
    public version?: string;
    public constructor(nodeType?: string, version?: string) { 
        this['node_type'] = nodeType;
        this['version'] = version;
    }
    public withNodeType(nodeType: string): DatastoreResult {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withVersion(version: string): DatastoreResult {
        this['version'] = version;
        return this;
    }
}