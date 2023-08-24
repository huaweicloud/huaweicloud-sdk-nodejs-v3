

export class HostRaspProtectHistoryResponseInfo {
    private 'host_ip'?: string;
    private 'host_name'?: string;
    private 'alarm_time'?: number;
    private 'threat_type'?: string;
    private 'alarm_level'?: number;
    private 'source_ip'?: string;
    private 'attacked_url'?: string;
    public constructor() { 
    }
    public withHostIp(hostIp: string): HostRaspProtectHistoryResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostName(hostName: string): HostRaspProtectHistoryResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAlarmTime(alarmTime: number): HostRaspProtectHistoryResponseInfo {
        this['alarm_time'] = alarmTime;
        return this;
    }
    public set alarmTime(alarmTime: number  | undefined) {
        this['alarm_time'] = alarmTime;
    }
    public get alarmTime(): number | undefined {
        return this['alarm_time'];
    }
    public withThreatType(threatType: string): HostRaspProtectHistoryResponseInfo {
        this['threat_type'] = threatType;
        return this;
    }
    public set threatType(threatType: string  | undefined) {
        this['threat_type'] = threatType;
    }
    public get threatType(): string | undefined {
        return this['threat_type'];
    }
    public withAlarmLevel(alarmLevel: number): HostRaspProtectHistoryResponseInfo {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withSourceIp(sourceIp: string): HostRaspProtectHistoryResponseInfo {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withAttackedUrl(attackedUrl: string): HostRaspProtectHistoryResponseInfo {
        this['attacked_url'] = attackedUrl;
        return this;
    }
    public set attackedUrl(attackedUrl: string  | undefined) {
        this['attacked_url'] = attackedUrl;
    }
    public get attackedUrl(): string | undefined {
        return this['attacked_url'];
    }
}