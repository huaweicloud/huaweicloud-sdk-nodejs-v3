

export class StandardReqDataByVideoAndNameAndId {
    private 'verification_name': string | undefined;
    private 'verification_id': string | undefined;
    public video: string;
    public actions: string;
    private 'nod_threshold'?: number | undefined;
    public constructor(verificationName?: any, verificationId?: any, video?: any, actions?: any) { 
        this['verification_name'] = verificationName;
        this['verification_id'] = verificationId;
        this['video'] = video;
        this['actions'] = actions;
    }
    public withVerificationName(verificationName: string): StandardReqDataByVideoAndNameAndId {
        this['verification_name'] = verificationName;
        return this;
    }
    public set verificationName(verificationName: string | undefined) {
        this['verification_name'] = verificationName;
    }
    public get verificationName() {
        return this['verification_name'];
    }
    public withVerificationId(verificationId: string): StandardReqDataByVideoAndNameAndId {
        this['verification_id'] = verificationId;
        return this;
    }
    public set verificationId(verificationId: string | undefined) {
        this['verification_id'] = verificationId;
    }
    public get verificationId() {
        return this['verification_id'];
    }
    public withVideo(video: string): StandardReqDataByVideoAndNameAndId {
        this['video'] = video;
        return this;
    }
    public withActions(actions: string): StandardReqDataByVideoAndNameAndId {
        this['actions'] = actions;
        return this;
    }
    public withNodThreshold(nodThreshold: number): StandardReqDataByVideoAndNameAndId {
        this['nod_threshold'] = nodThreshold;
        return this;
    }
    public set nodThreshold(nodThreshold: number | undefined) {
        this['nod_threshold'] = nodThreshold;
    }
    public get nodThreshold() {
        return this['nod_threshold'];
    }
}