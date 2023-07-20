

export class SearchQosParticipantDetailRequest {
    public confUUID?: string;
    public confType?: SearchQosParticipantDetailRequestConfTypeEnum | string;
    public participantID?: string;
    public qosType?: SearchQosParticipantDetailRequestQosTypeEnum | string;
    public constructor(confUUID?: string, confType?: string, participantID?: string, qosType?: string) { 
        this['confUUID'] = confUUID;
        this['confType'] = confType;
        this['participantID'] = participantID;
        this['qosType'] = qosType;
    }
    public withConfUUID(confUUID: string): SearchQosParticipantDetailRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConfType(confType: SearchQosParticipantDetailRequestConfTypeEnum | string): SearchQosParticipantDetailRequest {
        this['confType'] = confType;
        return this;
    }
    public withParticipantID(participantID: string): SearchQosParticipantDetailRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withQosType(qosType: SearchQosParticipantDetailRequestQosTypeEnum | string): SearchQosParticipantDetailRequest {
        this['qosType'] = qosType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchQosParticipantDetailRequestConfTypeEnum {
    ONLINE = 'online',
    HISTORY = 'history'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchQosParticipantDetailRequestQosTypeEnum {
    AUDIO = 'audio',
    VIDEO = 'video',
    SCREEN = 'screen',
    CPU = 'cpu'
}
