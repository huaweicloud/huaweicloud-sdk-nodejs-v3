

export class AbnormalEvent {
    public time: string;
    public uid: string;
    private 'room_id': string | undefined;
    public stage: string;
    public location: string;
    private 'peer_uid': string | undefined;
    private 'abnormal_type': number | undefined;
    private 'abnormal_type_desc': string | undefined;
    private 'abnormal_factor': number | undefined;
    private 'abnormal_factor_desc': string | undefined;
    public constructor(time?: any, uid?: any, roomId?: any, stage?: any, location?: any, peerUid?: any, abnormalType?: any, abnormalTypeDesc?: any, abnormalFactor?: any, abnormalFactorDesc?: any) { 
        this['time'] = time;
        this['uid'] = uid;
        this['room_id'] = roomId;
        this['stage'] = stage;
        this['location'] = location;
        this['peer_uid'] = peerUid;
        this['abnormal_type'] = abnormalType;
        this['abnormal_type_desc'] = abnormalTypeDesc;
        this['abnormal_factor'] = abnormalFactor;
        this['abnormal_factor_desc'] = abnormalFactorDesc;
    }
    public withTime(time: string): AbnormalEvent {
        this['time'] = time;
        return this;
    }
    public withUid(uid: string): AbnormalEvent {
        this['uid'] = uid;
        return this;
    }
    public withRoomId(roomId: string): AbnormalEvent {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withStage(stage: string): AbnormalEvent {
        this['stage'] = stage;
        return this;
    }
    public withLocation(location: string): AbnormalEvent {
        this['location'] = location;
        return this;
    }
    public withPeerUid(peerUid: string): AbnormalEvent {
        this['peer_uid'] = peerUid;
        return this;
    }
    public set peerUid(peerUid: string | undefined) {
        this['peer_uid'] = peerUid;
    }
    public get peerUid() {
        return this['peer_uid'];
    }
    public withAbnormalType(abnormalType: number): AbnormalEvent {
        this['abnormal_type'] = abnormalType;
        return this;
    }
    public set abnormalType(abnormalType: number | undefined) {
        this['abnormal_type'] = abnormalType;
    }
    public get abnormalType() {
        return this['abnormal_type'];
    }
    public withAbnormalTypeDesc(abnormalTypeDesc: string): AbnormalEvent {
        this['abnormal_type_desc'] = abnormalTypeDesc;
        return this;
    }
    public set abnormalTypeDesc(abnormalTypeDesc: string | undefined) {
        this['abnormal_type_desc'] = abnormalTypeDesc;
    }
    public get abnormalTypeDesc() {
        return this['abnormal_type_desc'];
    }
    public withAbnormalFactor(abnormalFactor: number): AbnormalEvent {
        this['abnormal_factor'] = abnormalFactor;
        return this;
    }
    public set abnormalFactor(abnormalFactor: number | undefined) {
        this['abnormal_factor'] = abnormalFactor;
    }
    public get abnormalFactor() {
        return this['abnormal_factor'];
    }
    public withAbnormalFactorDesc(abnormalFactorDesc: string): AbnormalEvent {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
        return this;
    }
    public set abnormalFactorDesc(abnormalFactorDesc: string | undefined) {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
    }
    public get abnormalFactorDesc() {
        return this['abnormal_factor_desc'];
    }
}