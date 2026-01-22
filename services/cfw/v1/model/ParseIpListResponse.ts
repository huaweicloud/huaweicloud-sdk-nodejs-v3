

export class ParseIpListResponse {
    private 'excess_ip'?: Array<string>;
    private 'parsed_success_ip'?: Array<string>;
    public constructor() { 
    }
    public withExcessIp(excessIp: Array<string>): ParseIpListResponse {
        this['excess_ip'] = excessIp;
        return this;
    }
    public set excessIp(excessIp: Array<string>  | undefined) {
        this['excess_ip'] = excessIp;
    }
    public get excessIp(): Array<string> | undefined {
        return this['excess_ip'];
    }
    public withParsedSuccessIp(parsedSuccessIp: Array<string>): ParseIpListResponse {
        this['parsed_success_ip'] = parsedSuccessIp;
        return this;
    }
    public set parsedSuccessIp(parsedSuccessIp: Array<string>  | undefined) {
        this['parsed_success_ip'] = parsedSuccessIp;
    }
    public get parsedSuccessIp(): Array<string> | undefined {
        return this['parsed_success_ip'];
    }
}