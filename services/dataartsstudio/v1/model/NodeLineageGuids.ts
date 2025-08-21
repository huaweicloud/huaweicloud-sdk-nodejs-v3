

export class NodeLineageGuids {
    public node?: string;
    private 'column_lineages'?: Array<string>;
    public constructor() { 
    }
    public withNode(node: string): NodeLineageGuids {
        this['node'] = node;
        return this;
    }
    public withColumnLineages(columnLineages: Array<string>): NodeLineageGuids {
        this['column_lineages'] = columnLineages;
        return this;
    }
    public set columnLineages(columnLineages: Array<string>  | undefined) {
        this['column_lineages'] = columnLineages;
    }
    public get columnLineages(): Array<string> | undefined {
        return this['column_lineages'];
    }
}