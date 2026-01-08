

export class ExportUserConnectionNewRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'user_name'?: string;
    private 'computer_name'?: string;
    private 'terminal_type'?: string;
    public language?: string;
    private 'min_e2e_rtt'?: number;
    private 'max_e2e_rtt'?: number;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withStartTime(startTime: string): ExportUserConnectionNewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExportUserConnectionNewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUserName(userName: string): ExportUserConnectionNewRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withComputerName(computerName: string): ExportUserConnectionNewRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withTerminalType(terminalType: string): ExportUserConnectionNewRequest {
        this['terminal_type'] = terminalType;
        return this;
    }
    public set terminalType(terminalType: string  | undefined) {
        this['terminal_type'] = terminalType;
    }
    public get terminalType(): string | undefined {
        return this['terminal_type'];
    }
    public withLanguage(language: string): ExportUserConnectionNewRequest {
        this['language'] = language;
        return this;
    }
    public withMinE2eRtt(minE2eRtt: number): ExportUserConnectionNewRequest {
        this['min_e2e_rtt'] = minE2eRtt;
        return this;
    }
    public set minE2eRtt(minE2eRtt: number  | undefined) {
        this['min_e2e_rtt'] = minE2eRtt;
    }
    public get minE2eRtt(): number | undefined {
        return this['min_e2e_rtt'];
    }
    public withMaxE2eRtt(maxE2eRtt: number): ExportUserConnectionNewRequest {
        this['max_e2e_rtt'] = maxE2eRtt;
        return this;
    }
    public set maxE2eRtt(maxE2eRtt: number  | undefined) {
        this['max_e2e_rtt'] = maxE2eRtt;
    }
    public get maxE2eRtt(): number | undefined {
        return this['max_e2e_rtt'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportUserConnectionNewRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}