

export class RealTimeConfInfo {
    public chairID?: string;
    public constructor() { 
    }
    public withChairID(chairID: string): RealTimeConfInfo {
        this['chairID'] = chairID;
        return this;
    }
}