

export class BackupNodeInfoResult {
    private 'az_list'?: string;
    private 'node_list'?: string;
    public constructor() { 
    }
    public withAzList(azList: string): BackupNodeInfoResult {
        this['az_list'] = azList;
        return this;
    }
    public set azList(azList: string  | undefined) {
        this['az_list'] = azList;
    }
    public get azList(): string | undefined {
        return this['az_list'];
    }
    public withNodeList(nodeList: string): BackupNodeInfoResult {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: string  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): string | undefined {
        return this['node_list'];
    }
}