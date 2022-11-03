

export class LtsIdInfo {
    public ltsGroupId?: string;
    public ltsAccessStreamID?: string;
    public ltsAttackStreamID?: object;
    public constructor() { 
    }
    public withLtsGroupId(ltsGroupId: string): LtsIdInfo {
        this['ltsGroupId'] = ltsGroupId;
        return this;
    }
    public withLtsAccessStreamID(ltsAccessStreamID: string): LtsIdInfo {
        this['ltsAccessStreamID'] = ltsAccessStreamID;
        return this;
    }
    public withLtsAttackStreamID(ltsAttackStreamID: object): LtsIdInfo {
        this['ltsAttackStreamID'] = ltsAttackStreamID;
        return this;
    }
}