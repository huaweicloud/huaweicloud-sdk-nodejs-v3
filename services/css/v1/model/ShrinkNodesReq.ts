

export class ShrinkNodesReq {
    private 'migrate_data'?: string;
    private 'shrink_nodes'?: Array<string>;
    public constructor(shrinkNodes?: Array<string>) { 
        this['shrink_nodes'] = shrinkNodes;
    }
    public withMigrateData(migrateData: string): ShrinkNodesReq {
        this['migrate_data'] = migrateData;
        return this;
    }
    public set migrateData(migrateData: string  | undefined) {
        this['migrate_data'] = migrateData;
    }
    public get migrateData(): string | undefined {
        return this['migrate_data'];
    }
    public withShrinkNodes(shrinkNodes: Array<string>): ShrinkNodesReq {
        this['shrink_nodes'] = shrinkNodes;
        return this;
    }
    public set shrinkNodes(shrinkNodes: Array<string>  | undefined) {
        this['shrink_nodes'] = shrinkNodes;
    }
    public get shrinkNodes(): Array<string> | undefined {
        return this['shrink_nodes'];
    }
}