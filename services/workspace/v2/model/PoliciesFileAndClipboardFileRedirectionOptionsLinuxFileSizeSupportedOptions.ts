

export class PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions {
    private 'linux_file_size_supported_threshold'?: number;
    public constructor() { 
    }
    public withLinuxFileSizeSupportedThreshold(linuxFileSizeSupportedThreshold: number): PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions {
        this['linux_file_size_supported_threshold'] = linuxFileSizeSupportedThreshold;
        return this;
    }
    public set linuxFileSizeSupportedThreshold(linuxFileSizeSupportedThreshold: number  | undefined) {
        this['linux_file_size_supported_threshold'] = linuxFileSizeSupportedThreshold;
    }
    public get linuxFileSizeSupportedThreshold(): number | undefined {
        return this['linux_file_size_supported_threshold'];
    }
}