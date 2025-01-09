

export class ListLoginRecordsNewRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'user_name'?: string;
    private 'computer_name'?: string;
    private 'terminal_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'min_network_rtt'?: number;
    private 'max_network_rtt'?: number;
    public constructor() { 
    }
    public withStartTime(startTime: string): ListLoginRecordsNewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListLoginRecordsNewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUserName(userName: string): ListLoginRecordsNewRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withComputerName(computerName: string): ListLoginRecordsNewRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withTerminalType(terminalType: string): ListLoginRecordsNewRequest {
        this['terminal_type'] = terminalType;
        return this;
    }
    public set terminalType(terminalType: string  | undefined) {
        this['terminal_type'] = terminalType;
    }
    public get terminalType(): string | undefined {
        return this['terminal_type'];
    }
    public withOffset(offset: number): ListLoginRecordsNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLoginRecordsNewRequest {
        this['limit'] = limit;
        return this;
    }
    public withMinNetworkRtt(minNetworkRtt: number): ListLoginRecordsNewRequest {
        this['min_network_rtt'] = minNetworkRtt;
        return this;
    }
    public set minNetworkRtt(minNetworkRtt: number  | undefined) {
        this['min_network_rtt'] = minNetworkRtt;
    }
    public get minNetworkRtt(): number | undefined {
        return this['min_network_rtt'];
    }
    public withMaxNetworkRtt(maxNetworkRtt: number): ListLoginRecordsNewRequest {
        this['max_network_rtt'] = maxNetworkRtt;
        return this;
    }
    public set maxNetworkRtt(maxNetworkRtt: number  | undefined) {
        this['max_network_rtt'] = maxNetworkRtt;
    }
    public get maxNetworkRtt(): number | undefined {
        return this['max_network_rtt'];
    }
}