

export class Record {
    public tenantId?: string;
    public sid?: string;
    private 'transaction_id'?: string;
    private 'computer_name'?: string;
    private 'user_name'?: string;
    private 'terminal_mac'?: string;
    private 'terminal_name'?: string;
    private 'terminal_ip'?: string;
    private 'client_version'?: string;
    private 'terminal_type'?: string;
    private 'agent_version'?: string;
    private 'desktop_ip'?: string;
    private 'connection_start_time'?: string;
    private 'connection_setup_time'?: string;
    private 'connection_end_time'?: string;
    private 'is_reconnect'?: boolean;
    private 'connection_failure_reason'?: string;
    private 'network_rtt'?: number;
    private 'e2e_rtt'?: number;
    public constructor() { 
    }
    public withTenantId(tenantId: string): Record {
        this['tenantId'] = tenantId;
        return this;
    }
    public withSid(sid: string): Record {
        this['sid'] = sid;
        return this;
    }
    public withTransactionId(transactionId: string): Record {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withComputerName(computerName: string): Record {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withUserName(userName: string): Record {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTerminalMac(terminalMac: string): Record {
        this['terminal_mac'] = terminalMac;
        return this;
    }
    public set terminalMac(terminalMac: string  | undefined) {
        this['terminal_mac'] = terminalMac;
    }
    public get terminalMac(): string | undefined {
        return this['terminal_mac'];
    }
    public withTerminalName(terminalName: string): Record {
        this['terminal_name'] = terminalName;
        return this;
    }
    public set terminalName(terminalName: string  | undefined) {
        this['terminal_name'] = terminalName;
    }
    public get terminalName(): string | undefined {
        return this['terminal_name'];
    }
    public withTerminalIp(terminalIp: string): Record {
        this['terminal_ip'] = terminalIp;
        return this;
    }
    public set terminalIp(terminalIp: string  | undefined) {
        this['terminal_ip'] = terminalIp;
    }
    public get terminalIp(): string | undefined {
        return this['terminal_ip'];
    }
    public withClientVersion(clientVersion: string): Record {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withTerminalType(terminalType: string): Record {
        this['terminal_type'] = terminalType;
        return this;
    }
    public set terminalType(terminalType: string  | undefined) {
        this['terminal_type'] = terminalType;
    }
    public get terminalType(): string | undefined {
        return this['terminal_type'];
    }
    public withAgentVersion(agentVersion: string): Record {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withDesktopIp(desktopIp: string): Record {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withConnectionStartTime(connectionStartTime: string): Record {
        this['connection_start_time'] = connectionStartTime;
        return this;
    }
    public set connectionStartTime(connectionStartTime: string  | undefined) {
        this['connection_start_time'] = connectionStartTime;
    }
    public get connectionStartTime(): string | undefined {
        return this['connection_start_time'];
    }
    public withConnectionSetupTime(connectionSetupTime: string): Record {
        this['connection_setup_time'] = connectionSetupTime;
        return this;
    }
    public set connectionSetupTime(connectionSetupTime: string  | undefined) {
        this['connection_setup_time'] = connectionSetupTime;
    }
    public get connectionSetupTime(): string | undefined {
        return this['connection_setup_time'];
    }
    public withConnectionEndTime(connectionEndTime: string): Record {
        this['connection_end_time'] = connectionEndTime;
        return this;
    }
    public set connectionEndTime(connectionEndTime: string  | undefined) {
        this['connection_end_time'] = connectionEndTime;
    }
    public get connectionEndTime(): string | undefined {
        return this['connection_end_time'];
    }
    public withIsReconnect(isReconnect: boolean): Record {
        this['is_reconnect'] = isReconnect;
        return this;
    }
    public set isReconnect(isReconnect: boolean  | undefined) {
        this['is_reconnect'] = isReconnect;
    }
    public get isReconnect(): boolean | undefined {
        return this['is_reconnect'];
    }
    public withConnectionFailureReason(connectionFailureReason: string): Record {
        this['connection_failure_reason'] = connectionFailureReason;
        return this;
    }
    public set connectionFailureReason(connectionFailureReason: string  | undefined) {
        this['connection_failure_reason'] = connectionFailureReason;
    }
    public get connectionFailureReason(): string | undefined {
        return this['connection_failure_reason'];
    }
    public withNetworkRtt(networkRtt: number): Record {
        this['network_rtt'] = networkRtt;
        return this;
    }
    public set networkRtt(networkRtt: number  | undefined) {
        this['network_rtt'] = networkRtt;
    }
    public get networkRtt(): number | undefined {
        return this['network_rtt'];
    }
    public withE2eRtt(e2eRtt: number): Record {
        this['e2e_rtt'] = e2eRtt;
        return this;
    }
    public set e2eRtt(e2eRtt: number  | undefined) {
        this['e2e_rtt'] = e2eRtt;
    }
    public get e2eRtt(): number | undefined {
        return this['e2e_rtt'];
    }
}