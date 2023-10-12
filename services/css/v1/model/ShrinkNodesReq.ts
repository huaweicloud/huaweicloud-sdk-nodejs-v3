

export class ShrinkNodesReq {
    private 'migrate_data'?: string;
    public shrinkNodes?: Array<string>;
    public constructor(shrinkNodes?: Array<string>) { 
        this['shrinkNodes'] = shrinkNodes;
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
        this['shrinkNodes'] = shrinkNodes;
        return this;
    }
}