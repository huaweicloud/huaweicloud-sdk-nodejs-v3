

export class HoneypotEventResponseInfo {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    public severity?: string;
    private 'attack_ip'?: string;
    private 'attack_num'?: number;
    private 'attack_last_time'?: number;
    private 'attack_start_time'?: number;
    private 'device_fingerprint'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): HoneypotEventResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): HoneypotEventResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): HoneypotEventResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withPrivateIp(privateIp: string): HoneypotEventResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): HoneypotEventResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withSeverity(severity: string): HoneypotEventResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withAttackIp(attackIp: string): HoneypotEventResponseInfo {
        this['attack_ip'] = attackIp;
        return this;
    }
    public set attackIp(attackIp: string  | undefined) {
        this['attack_ip'] = attackIp;
    }
    public get attackIp(): string | undefined {
        return this['attack_ip'];
    }
    public withAttackNum(attackNum: number): HoneypotEventResponseInfo {
        this['attack_num'] = attackNum;
        return this;
    }
    public set attackNum(attackNum: number  | undefined) {
        this['attack_num'] = attackNum;
    }
    public get attackNum(): number | undefined {
        return this['attack_num'];
    }
    public withAttackLastTime(attackLastTime: number): HoneypotEventResponseInfo {
        this['attack_last_time'] = attackLastTime;
        return this;
    }
    public set attackLastTime(attackLastTime: number  | undefined) {
        this['attack_last_time'] = attackLastTime;
    }
    public get attackLastTime(): number | undefined {
        return this['attack_last_time'];
    }
    public withAttackStartTime(attackStartTime: number): HoneypotEventResponseInfo {
        this['attack_start_time'] = attackStartTime;
        return this;
    }
    public set attackStartTime(attackStartTime: number  | undefined) {
        this['attack_start_time'] = attackStartTime;
    }
    public get attackStartTime(): number | undefined {
        return this['attack_start_time'];
    }
    public withDeviceFingerprint(deviceFingerprint: string): HoneypotEventResponseInfo {
        this['device_fingerprint'] = deviceFingerprint;
        return this;
    }
    public set deviceFingerprint(deviceFingerprint: string  | undefined) {
        this['device_fingerprint'] = deviceFingerprint;
    }
    public get deviceFingerprint(): string | undefined {
        return this['device_fingerprint'];
    }
}