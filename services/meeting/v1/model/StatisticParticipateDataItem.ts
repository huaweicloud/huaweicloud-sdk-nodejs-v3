

export class StatisticParticipateDataItem {
    public time?: string;
    public confUserName?: string;
    public confUserAccount?: string;
    public confUserDeptName?: string;
    public confUserCount?: string;
    public confUserDuration?: string;
    public confHardTerminalName?: string;
    public confHardTerminalModel?: string;
    public confHardTerminalUserId?: string;
    public confHardTerminalCount?: string;
    public confHardTerminalDuration?: string;
    public deviceType?: string;
    public deviceVersion?: string;
    public deviceAttendanceCount?: string;
    public constructor() { 
    }
    public withTime(time: string): StatisticParticipateDataItem {
        this['time'] = time;
        return this;
    }
    public withConfUserName(confUserName: string): StatisticParticipateDataItem {
        this['confUserName'] = confUserName;
        return this;
    }
    public withConfUserAccount(confUserAccount: string): StatisticParticipateDataItem {
        this['confUserAccount'] = confUserAccount;
        return this;
    }
    public withConfUserDeptName(confUserDeptName: string): StatisticParticipateDataItem {
        this['confUserDeptName'] = confUserDeptName;
        return this;
    }
    public withConfUserCount(confUserCount: string): StatisticParticipateDataItem {
        this['confUserCount'] = confUserCount;
        return this;
    }
    public withConfUserDuration(confUserDuration: string): StatisticParticipateDataItem {
        this['confUserDuration'] = confUserDuration;
        return this;
    }
    public withConfHardTerminalName(confHardTerminalName: string): StatisticParticipateDataItem {
        this['confHardTerminalName'] = confHardTerminalName;
        return this;
    }
    public withConfHardTerminalModel(confHardTerminalModel: string): StatisticParticipateDataItem {
        this['confHardTerminalModel'] = confHardTerminalModel;
        return this;
    }
    public withConfHardTerminalUserId(confHardTerminalUserId: string): StatisticParticipateDataItem {
        this['confHardTerminalUserId'] = confHardTerminalUserId;
        return this;
    }
    public withConfHardTerminalCount(confHardTerminalCount: string): StatisticParticipateDataItem {
        this['confHardTerminalCount'] = confHardTerminalCount;
        return this;
    }
    public withConfHardTerminalDuration(confHardTerminalDuration: string): StatisticParticipateDataItem {
        this['confHardTerminalDuration'] = confHardTerminalDuration;
        return this;
    }
    public withDeviceType(deviceType: string): StatisticParticipateDataItem {
        this['deviceType'] = deviceType;
        return this;
    }
    public withDeviceVersion(deviceVersion: string): StatisticParticipateDataItem {
        this['deviceVersion'] = deviceVersion;
        return this;
    }
    public withDeviceAttendanceCount(deviceAttendanceCount: string): StatisticParticipateDataItem {
        this['deviceAttendanceCount'] = deviceAttendanceCount;
        return this;
    }
}