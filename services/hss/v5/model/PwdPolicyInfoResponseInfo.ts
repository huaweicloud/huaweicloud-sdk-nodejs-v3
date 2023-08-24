

export class PwdPolicyInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'min_length'?: boolean;
    private 'uppercase_letter'?: boolean;
    private 'lowercase_letter'?: boolean;
    private 'number'?: boolean;
    private 'special_character'?: boolean;
    public suggestion?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): PwdPolicyInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): PwdPolicyInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): PwdPolicyInfoResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withMinLength(minLength: boolean): PwdPolicyInfoResponseInfo {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: boolean  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): boolean | undefined {
        return this['min_length'];
    }
    public withUppercaseLetter(uppercaseLetter: boolean): PwdPolicyInfoResponseInfo {
        this['uppercase_letter'] = uppercaseLetter;
        return this;
    }
    public set uppercaseLetter(uppercaseLetter: boolean  | undefined) {
        this['uppercase_letter'] = uppercaseLetter;
    }
    public get uppercaseLetter(): boolean | undefined {
        return this['uppercase_letter'];
    }
    public withLowercaseLetter(lowercaseLetter: boolean): PwdPolicyInfoResponseInfo {
        this['lowercase_letter'] = lowercaseLetter;
        return this;
    }
    public set lowercaseLetter(lowercaseLetter: boolean  | undefined) {
        this['lowercase_letter'] = lowercaseLetter;
    }
    public get lowercaseLetter(): boolean | undefined {
        return this['lowercase_letter'];
    }
    public withModelNumber(modelNumber: boolean): PwdPolicyInfoResponseInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: boolean  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): boolean | undefined {
        return this['number'];
    }
    public withSpecialCharacter(specialCharacter: boolean): PwdPolicyInfoResponseInfo {
        this['special_character'] = specialCharacter;
        return this;
    }
    public set specialCharacter(specialCharacter: boolean  | undefined) {
        this['special_character'] = specialCharacter;
    }
    public get specialCharacter(): boolean | undefined {
        return this['special_character'];
    }
    public withSuggestion(suggestion: string): PwdPolicyInfoResponseInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}