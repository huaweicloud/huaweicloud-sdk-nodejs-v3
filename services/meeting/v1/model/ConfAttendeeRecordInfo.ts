

export class ConfAttendeeRecordInfo {
    public displayName?: string;
    public callNumber?: string;
    public deviceType?: string;
    public joinTime?: number;
    public leftTime?: number;
    public mediaType?: string;
    public deptName?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): ConfAttendeeRecordInfo {
        this['displayName'] = displayName;
        return this;
    }
    public withCallNumber(callNumber: string): ConfAttendeeRecordInfo {
        this['callNumber'] = callNumber;
        return this;
    }
    public withDeviceType(deviceType: string): ConfAttendeeRecordInfo {
        this['deviceType'] = deviceType;
        return this;
    }
    public withJoinTime(joinTime: number): ConfAttendeeRecordInfo {
        this['joinTime'] = joinTime;
        return this;
    }
    public withLeftTime(leftTime: number): ConfAttendeeRecordInfo {
        this['leftTime'] = leftTime;
        return this;
    }
    public withMediaType(mediaType: string): ConfAttendeeRecordInfo {
        this['mediaType'] = mediaType;
        return this;
    }
    public withDeptName(deptName: string): ConfAttendeeRecordInfo {
        this['deptName'] = deptName;
        return this;
    }
}