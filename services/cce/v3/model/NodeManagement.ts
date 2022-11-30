

export class NodeManagement {
    public serverGroupReference?: string;
    public constructor() { 
    }
    public withServerGroupReference(serverGroupReference: string): NodeManagement {
        this['serverGroupReference'] = serverGroupReference;
        return this;
    }
}