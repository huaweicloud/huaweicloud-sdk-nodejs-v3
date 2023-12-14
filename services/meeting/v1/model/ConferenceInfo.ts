import { CycleParams } from './CycleParams';
import { CycleSubConf } from './CycleSubConf';
import { MultiPicDisplayDO } from './MultiPicDisplayDO';
import { PartAttendee } from './PartAttendee';
import { PasswordEntry } from './PasswordEntry';
import { RestConfConfigDTO } from './RestConfConfigDTO';


export class ConferenceInfo {
    public conferenceID?: string;
    public subject?: string;
    public size?: number;
    public timeZoneID?: string;
    public startTime?: string;
    public endTime?: string;
    public mediaTypes?: string;
    public conferenceState?: string;
    public language?: string;
    public accessNumber?: string;
    public passwordEntry?: Array<PasswordEntry>;
    public userUUID?: string;
    public scheduserName?: string;
    public conferenceType?: number;
    public confType?: string;
    public cycleParams?: CycleParams;
    public isAutoMute?: number;
    public isAutoRecord?: number;
    public chairJoinUri?: string;
    public guestJoinUri?: string;
    public audienceJoinUri?: string;
    public recordType?: number;
    public auxAddress?: string;
    public liveAddress?: string;
    public recordAuxStream?: number;
    public recordAuthType?: number;
    public liveUrl?: string;
    public confConfigInfo?: RestConfConfigDTO;
    public vmrFlag?: number;
    public isHasRecordFile?: boolean;
    public vmrConferenceID?: string;
    public confUUID?: string;
    public partAttendeeInfo?: Array<PartAttendee>;
    public terminlCount?: number;
    public normalCount?: number;
    public deptName?: string;
    public vmrID?: string;
    public role?: ConferenceInfoRoleEnum | string;
    public webinar?: boolean;
    public onlineAttendeeAmount?: number;
    public multiStreamFlag?: number;
    public confMode?: ConferenceInfoConfModeEnum | string;
    public scheduleVmr?: boolean;
    public concurrentParticipants?: number;
    public supportSimultaneousInterpretation?: boolean;
    public picDisplay?: MultiPicDisplayDO;
    public subConfs?: Array<CycleSubConf>;
    public cycleSubConfID?: string;
    public constructor() { 
    }
    public withConferenceID(conferenceID: string): ConferenceInfo {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withSubject(subject: string): ConferenceInfo {
        this['subject'] = subject;
        return this;
    }
    public withSize(size: number): ConferenceInfo {
        this['size'] = size;
        return this;
    }
    public withTimeZoneID(timeZoneID: string): ConferenceInfo {
        this['timeZoneID'] = timeZoneID;
        return this;
    }
    public withStartTime(startTime: string): ConferenceInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): ConferenceInfo {
        this['endTime'] = endTime;
        return this;
    }
    public withMediaTypes(mediaTypes: string): ConferenceInfo {
        this['mediaTypes'] = mediaTypes;
        return this;
    }
    public withConferenceState(conferenceState: string): ConferenceInfo {
        this['conferenceState'] = conferenceState;
        return this;
    }
    public withLanguage(language: string): ConferenceInfo {
        this['language'] = language;
        return this;
    }
    public withAccessNumber(accessNumber: string): ConferenceInfo {
        this['accessNumber'] = accessNumber;
        return this;
    }
    public withPasswordEntry(passwordEntry: Array<PasswordEntry>): ConferenceInfo {
        this['passwordEntry'] = passwordEntry;
        return this;
    }
    public withUserUUID(userUUID: string): ConferenceInfo {
        this['userUUID'] = userUUID;
        return this;
    }
    public withScheduserName(scheduserName: string): ConferenceInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withConferenceType(conferenceType: number): ConferenceInfo {
        this['conferenceType'] = conferenceType;
        return this;
    }
    public withConfType(confType: string): ConferenceInfo {
        this['confType'] = confType;
        return this;
    }
    public withCycleParams(cycleParams: CycleParams): ConferenceInfo {
        this['cycleParams'] = cycleParams;
        return this;
    }
    public withIsAutoMute(isAutoMute: number): ConferenceInfo {
        this['isAutoMute'] = isAutoMute;
        return this;
    }
    public withIsAutoRecord(isAutoRecord: number): ConferenceInfo {
        this['isAutoRecord'] = isAutoRecord;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): ConferenceInfo {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): ConferenceInfo {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): ConferenceInfo {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withRecordType(recordType: number): ConferenceInfo {
        this['recordType'] = recordType;
        return this;
    }
    public withAuxAddress(auxAddress: string): ConferenceInfo {
        this['auxAddress'] = auxAddress;
        return this;
    }
    public withLiveAddress(liveAddress: string): ConferenceInfo {
        this['liveAddress'] = liveAddress;
        return this;
    }
    public withRecordAuxStream(recordAuxStream: number): ConferenceInfo {
        this['recordAuxStream'] = recordAuxStream;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): ConferenceInfo {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
    public withLiveUrl(liveUrl: string): ConferenceInfo {
        this['liveUrl'] = liveUrl;
        return this;
    }
    public withConfConfigInfo(confConfigInfo: RestConfConfigDTO): ConferenceInfo {
        this['confConfigInfo'] = confConfigInfo;
        return this;
    }
    public withVmrFlag(vmrFlag: number): ConferenceInfo {
        this['vmrFlag'] = vmrFlag;
        return this;
    }
    public withIsHasRecordFile(isHasRecordFile: boolean): ConferenceInfo {
        this['isHasRecordFile'] = isHasRecordFile;
        return this;
    }
    public withVmrConferenceID(vmrConferenceID: string): ConferenceInfo {
        this['vmrConferenceID'] = vmrConferenceID;
        return this;
    }
    public withConfUUID(confUUID: string): ConferenceInfo {
        this['confUUID'] = confUUID;
        return this;
    }
    public withPartAttendeeInfo(partAttendeeInfo: Array<PartAttendee>): ConferenceInfo {
        this['partAttendeeInfo'] = partAttendeeInfo;
        return this;
    }
    public withTerminlCount(terminlCount: number): ConferenceInfo {
        this['terminlCount'] = terminlCount;
        return this;
    }
    public withNormalCount(normalCount: number): ConferenceInfo {
        this['normalCount'] = normalCount;
        return this;
    }
    public withDeptName(deptName: string): ConferenceInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withVmrID(vmrID: string): ConferenceInfo {
        this['vmrID'] = vmrID;
        return this;
    }
    public withRole(role: ConferenceInfoRoleEnum | string): ConferenceInfo {
        this['role'] = role;
        return this;
    }
    public withWebinar(webinar: boolean): ConferenceInfo {
        this['webinar'] = webinar;
        return this;
    }
    public withOnlineAttendeeAmount(onlineAttendeeAmount: number): ConferenceInfo {
        this['onlineAttendeeAmount'] = onlineAttendeeAmount;
        return this;
    }
    public withMultiStreamFlag(multiStreamFlag: number): ConferenceInfo {
        this['multiStreamFlag'] = multiStreamFlag;
        return this;
    }
    public withConfMode(confMode: ConferenceInfoConfModeEnum | string): ConferenceInfo {
        this['confMode'] = confMode;
        return this;
    }
    public withScheduleVmr(scheduleVmr: boolean): ConferenceInfo {
        this['scheduleVmr'] = scheduleVmr;
        return this;
    }
    public withConcurrentParticipants(concurrentParticipants: number): ConferenceInfo {
        this['concurrentParticipants'] = concurrentParticipants;
        return this;
    }
    public withSupportSimultaneousInterpretation(supportSimultaneousInterpretation: boolean): ConferenceInfo {
        this['supportSimultaneousInterpretation'] = supportSimultaneousInterpretation;
        return this;
    }
    public withPicDisplay(picDisplay: MultiPicDisplayDO): ConferenceInfo {
        this['picDisplay'] = picDisplay;
        return this;
    }
    public withSubConfs(subConfs: Array<CycleSubConf>): ConferenceInfo {
        this['subConfs'] = subConfs;
        return this;
    }
    public withCycleSubConfID(cycleSubConfID: string): ConferenceInfo {
        this['cycleSubConfID'] = cycleSubConfID;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConferenceInfoRoleEnum {
    CHAIR = 'chair',
    GENERAL = 'general',
    AUDIENCE = 'audience'
}
/**
    * @export
    * @enum {string}
    */
export enum ConferenceInfoConfModeEnum {
    COMMON = 'COMMON',
    RTC = 'RTC'
}
