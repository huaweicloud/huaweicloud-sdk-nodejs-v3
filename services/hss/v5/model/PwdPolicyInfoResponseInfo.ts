

export class PwdPolicyInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'min_length'?: boolean;
    private 'uppercase_letter'?: boolean;
    private 'lowercase_letter'?: boolean;
    private 'number'?: boolean;
    private 'special_character'?: boolean;
    private 'min_length_num'?: number;
    private 'min_uppercase_letter'?: number;
    private 'min_lowercase_letter'?: number;
    private 'min_number'?: number;
    private 'min_special_character'?: number;
    private 'update_time'?: number;
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
    public withPrivateIp(privateIp: string): PwdPolicyInfoResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): PwdPolicyInfoResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
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
    public withMinLengthNum(minLengthNum: number): PwdPolicyInfoResponseInfo {
        this['min_length_num'] = minLengthNum;
        return this;
    }
    public set minLengthNum(minLengthNum: number  | undefined) {
        this['min_length_num'] = minLengthNum;
    }
    public get minLengthNum(): number | undefined {
        return this['min_length_num'];
    }
    public withMinUppercaseLetter(minUppercaseLetter: number): PwdPolicyInfoResponseInfo {
        this['min_uppercase_letter'] = minUppercaseLetter;
        return this;
    }
    public set minUppercaseLetter(minUppercaseLetter: number  | undefined) {
        this['min_uppercase_letter'] = minUppercaseLetter;
    }
    public get minUppercaseLetter(): number | undefined {
        return this['min_uppercase_letter'];
    }
    public withMinLowercaseLetter(minLowercaseLetter: number): PwdPolicyInfoResponseInfo {
        this['min_lowercase_letter'] = minLowercaseLetter;
        return this;
    }
    public set minLowercaseLetter(minLowercaseLetter: number  | undefined) {
        this['min_lowercase_letter'] = minLowercaseLetter;
    }
    public get minLowercaseLetter(): number | undefined {
        return this['min_lowercase_letter'];
    }
    public withMinNumber(minNumber: number): PwdPolicyInfoResponseInfo {
        this['min_number'] = minNumber;
        return this;
    }
    public set minNumber(minNumber: number  | undefined) {
        this['min_number'] = minNumber;
    }
    public get minNumber(): number | undefined {
        return this['min_number'];
    }
    public withMinSpecialCharacter(minSpecialCharacter: number): PwdPolicyInfoResponseInfo {
        this['min_special_character'] = minSpecialCharacter;
        return this;
    }
    public set minSpecialCharacter(minSpecialCharacter: number  | undefined) {
        this['min_special_character'] = minSpecialCharacter;
    }
    public get minSpecialCharacter(): number | undefined {
        return this['min_special_character'];
    }
    public withUpdateTime(updateTime: number): PwdPolicyInfoResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withSuggestion(suggestion: string): PwdPolicyInfoResponseInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}