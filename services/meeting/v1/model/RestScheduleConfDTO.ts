import { CycleParams } from './CycleParams';
import { RestAttendeeDTO } from './RestAttendeeDTO';
import { RestConfConfigDTO } from './RestConfConfigDTO';


export class RestScheduleConfDTO {
    public startTime?: string;
    public length?: number;
    public subject?: string;
    public mediaTypes?: string;
    public groupuri?: string;
    public attendees?: Array<RestAttendeeDTO>;
    public isAutoRecord?: number;
    public encryptMode?: number;
    public language?: string;
    public timeZoneID?: string;
    public recordType?: number;
    public liveAddress?: string;
    public auxAddress?: string;
    public recordAuxStream?: number;
    public confConfigInfo?: RestConfConfigDTO;
    public recordAuthType?: number;
    public vmrFlag?: number;
    public cycleParams?: CycleParams;
    public vmrID?: string;
    public concurrentParticipants?: number;
    public supportSimultaneousInterpretation?: boolean;
    public constructor(mediaTypes?: string) { 
        this['mediaTypes'] = mediaTypes;
    }
    public withStartTime(startTime: string): RestScheduleConfDTO {
        this['startTime'] = startTime;
        return this;
    }
    public withLength(length: number): RestScheduleConfDTO {
        this['length'] = length;
        return this;
    }
    public withSubject(subject: string): RestScheduleConfDTO {
        this['subject'] = subject;
        return this;
    }
    public withMediaTypes(mediaTypes: string): RestScheduleConfDTO {
        this['mediaTypes'] = mediaTypes;
        return this;
    }
    public withGroupuri(groupuri: string): RestScheduleConfDTO {
        this['groupuri'] = groupuri;
        return this;
    }
    public withAttendees(attendees: Array<RestAttendeeDTO>): RestScheduleConfDTO {
        this['attendees'] = attendees;
        return this;
    }
    public withIsAutoRecord(isAutoRecord: number): RestScheduleConfDTO {
        this['isAutoRecord'] = isAutoRecord;
        return this;
    }
    public withEncryptMode(encryptMode: number): RestScheduleConfDTO {
        this['encryptMode'] = encryptMode;
        return this;
    }
    public withLanguage(language: string): RestScheduleConfDTO {
        this['language'] = language;
        return this;
    }
    public withTimeZoneID(timeZoneID: string): RestScheduleConfDTO {
        this['timeZoneID'] = timeZoneID;
        return this;
    }
    public withRecordType(recordType: number): RestScheduleConfDTO {
        this['recordType'] = recordType;
        return this;
    }
    public withLiveAddress(liveAddress: string): RestScheduleConfDTO {
        this['liveAddress'] = liveAddress;
        return this;
    }
    public withAuxAddress(auxAddress: string): RestScheduleConfDTO {
        this['auxAddress'] = auxAddress;
        return this;
    }
    public withRecordAuxStream(recordAuxStream: number): RestScheduleConfDTO {
        this['recordAuxStream'] = recordAuxStream;
        return this;
    }
    public withConfConfigInfo(confConfigInfo: RestConfConfigDTO): RestScheduleConfDTO {
        this['confConfigInfo'] = confConfigInfo;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): RestScheduleConfDTO {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
    public withVmrFlag(vmrFlag: number): RestScheduleConfDTO {
        this['vmrFlag'] = vmrFlag;
        return this;
    }
    public withCycleParams(cycleParams: CycleParams): RestScheduleConfDTO {
        this['cycleParams'] = cycleParams;
        return this;
    }
    public withVmrID(vmrID: string): RestScheduleConfDTO {
        this['vmrID'] = vmrID;
        return this;
    }
    public withConcurrentParticipants(concurrentParticipants: number): RestScheduleConfDTO {
        this['concurrentParticipants'] = concurrentParticipants;
        return this;
    }
    public withSupportSimultaneousInterpretation(supportSimultaneousInterpretation: boolean): RestScheduleConfDTO {
        this['supportSimultaneousInterpretation'] = supportSimultaneousInterpretation;
        return this;
    }
}