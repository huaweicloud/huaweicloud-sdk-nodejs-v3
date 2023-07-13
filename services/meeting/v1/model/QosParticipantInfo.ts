

export class QosParticipantInfo {
    public confUUID?: string;
    public conferenceID?: string;
    public participantID?: string;
    public userUUID?: string;
    public displayName?: string;
    public deptName?: string;
    public terminalType?: string;
    public role?: string;
    public ipAddress?: string;
    public country?: string;
    public province?: string;
    public city?: string;
    public appVersion?: string;
    public joinTime?: number;
    public leftTime?: number;
    public systemInfo?: string;
    public networkType?: string;
    public alarm?: string;
    public audioAlarmSend?: string;
    public videoAlarmSend?: string;
    public screenAlarmSend?: string;
    public audioAlarmRec?: string;
    public videoAlarmRec?: string;
    public screenAlarmRec?: string;
    public cpuAlarm?: string;
    public microphoneInfo?: string;
    public speakerInfo?: string;
    public cameraInfo?: string;
    public dataCenter?: string;
    public leftReason?: number;
    public existQos?: boolean;
    public constructor() { 
    }
    public withConfUUID(confUUID: string): QosParticipantInfo {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConferenceID(conferenceID: string): QosParticipantInfo {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): QosParticipantInfo {
        this['participantID'] = participantID;
        return this;
    }
    public withUserUUID(userUUID: string): QosParticipantInfo {
        this['userUUID'] = userUUID;
        return this;
    }
    public withDisplayName(displayName: string): QosParticipantInfo {
        this['displayName'] = displayName;
        return this;
    }
    public withDeptName(deptName: string): QosParticipantInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withTerminalType(terminalType: string): QosParticipantInfo {
        this['terminalType'] = terminalType;
        return this;
    }
    public withRole(role: string): QosParticipantInfo {
        this['role'] = role;
        return this;
    }
    public withIpAddress(ipAddress: string): QosParticipantInfo {
        this['ipAddress'] = ipAddress;
        return this;
    }
    public withCountry(country: string): QosParticipantInfo {
        this['country'] = country;
        return this;
    }
    public withProvince(province: string): QosParticipantInfo {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): QosParticipantInfo {
        this['city'] = city;
        return this;
    }
    public withAppVersion(appVersion: string): QosParticipantInfo {
        this['appVersion'] = appVersion;
        return this;
    }
    public withJoinTime(joinTime: number): QosParticipantInfo {
        this['joinTime'] = joinTime;
        return this;
    }
    public withLeftTime(leftTime: number): QosParticipantInfo {
        this['leftTime'] = leftTime;
        return this;
    }
    public withSystemInfo(systemInfo: string): QosParticipantInfo {
        this['systemInfo'] = systemInfo;
        return this;
    }
    public withNetworkType(networkType: string): QosParticipantInfo {
        this['networkType'] = networkType;
        return this;
    }
    public withAlarm(alarm: string): QosParticipantInfo {
        this['alarm'] = alarm;
        return this;
    }
    public withAudioAlarmSend(audioAlarmSend: string): QosParticipantInfo {
        this['audioAlarmSend'] = audioAlarmSend;
        return this;
    }
    public withVideoAlarmSend(videoAlarmSend: string): QosParticipantInfo {
        this['videoAlarmSend'] = videoAlarmSend;
        return this;
    }
    public withScreenAlarmSend(screenAlarmSend: string): QosParticipantInfo {
        this['screenAlarmSend'] = screenAlarmSend;
        return this;
    }
    public withAudioAlarmRec(audioAlarmRec: string): QosParticipantInfo {
        this['audioAlarmRec'] = audioAlarmRec;
        return this;
    }
    public withVideoAlarmRec(videoAlarmRec: string): QosParticipantInfo {
        this['videoAlarmRec'] = videoAlarmRec;
        return this;
    }
    public withScreenAlarmRec(screenAlarmRec: string): QosParticipantInfo {
        this['screenAlarmRec'] = screenAlarmRec;
        return this;
    }
    public withCpuAlarm(cpuAlarm: string): QosParticipantInfo {
        this['cpuAlarm'] = cpuAlarm;
        return this;
    }
    public withMicrophoneInfo(microphoneInfo: string): QosParticipantInfo {
        this['microphoneInfo'] = microphoneInfo;
        return this;
    }
    public withSpeakerInfo(speakerInfo: string): QosParticipantInfo {
        this['speakerInfo'] = speakerInfo;
        return this;
    }
    public withCameraInfo(cameraInfo: string): QosParticipantInfo {
        this['cameraInfo'] = cameraInfo;
        return this;
    }
    public withDataCenter(dataCenter: string): QosParticipantInfo {
        this['dataCenter'] = dataCenter;
        return this;
    }
    public withLeftReason(leftReason: number): QosParticipantInfo {
        this['leftReason'] = leftReason;
        return this;
    }
    public withExistQos(existQos: boolean): QosParticipantInfo {
        this['existQos'] = existQos;
        return this;
    }
}