

export class AddNodesToNodePool {
    public serverID?: string;
    public constructor(serverID?: string) { 
        this['serverID'] = serverID;
    }
    public withServerID(serverID: string): AddNodesToNodePool {
        this['serverID'] = serverID;
        return this;
    }
}