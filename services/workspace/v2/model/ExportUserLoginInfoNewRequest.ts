

export class ExportUserLoginInfoNewRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'user_name'?: string;
    private 'computer_name'?: string;
    private 'terminal_type'?: string;
    public language?: string;
    public constructor() { 
    }
    public withStartTime(startTime: string): ExportUserLoginInfoNewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExportUserLoginInfoNewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUserName(userName: string): ExportUserLoginInfoNewRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withComputerName(computerName: string): ExportUserLoginInfoNewRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withTerminalType(terminalType: string): ExportUserLoginInfoNewRequest {
        this['terminal_type'] = terminalType;
        return this;
    }
    public set terminalType(terminalType: string  | undefined) {
        this['terminal_type'] = terminalType;
    }
    public get terminalType(): string | undefined {
        return this['terminal_type'];
    }
    public withLanguage(language: string): ExportUserLoginInfoNewRequest {
        this['language'] = language;
        return this;
    }
}