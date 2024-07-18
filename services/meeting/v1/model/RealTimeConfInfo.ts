

export class RealTimeConfInfo {
    public chairID?: string;
    public coHosts?: Array<string>;
    public constructor() { 
    }
    public withChairID(chairID: string): RealTimeConfInfo {
        this['chairID'] = chairID;
        return this;
    }
    public withCoHosts(coHosts: Array<string>): RealTimeConfInfo {
        this['coHosts'] = coHosts;
        return this;
    }
}