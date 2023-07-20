

export class FollowerMigrateRequest {
    public nodeId?: string;
    public azCode?: string;
    public constructor(nodeId?: string, azCode?: string) { 
        this['nodeId'] = nodeId;
        this['azCode'] = azCode;
    }
    public withNodeId(nodeId: string): FollowerMigrateRequest {
        this['nodeId'] = nodeId;
        return this;
    }
    public withAzCode(azCode: string): FollowerMigrateRequest {
        this['azCode'] = azCode;
        return this;
    }
}