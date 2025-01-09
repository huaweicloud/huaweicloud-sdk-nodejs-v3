

export class PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions {
    private 'compression_threshold'?: number;
    private 'minimum_compression_rate'?: number;
    public constructor() { 
    }
    public withCompressionThreshold(compressionThreshold: number): PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions {
        this['compression_threshold'] = compressionThreshold;
        return this;
    }
    public set compressionThreshold(compressionThreshold: number  | undefined) {
        this['compression_threshold'] = compressionThreshold;
    }
    public get compressionThreshold(): number | undefined {
        return this['compression_threshold'];
    }
    public withMinimumCompressionRate(minimumCompressionRate: number): PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions {
        this['minimum_compression_rate'] = minimumCompressionRate;
        return this;
    }
    public set minimumCompressionRate(minimumCompressionRate: number  | undefined) {
        this['minimum_compression_rate'] = minimumCompressionRate;
    }
    public get minimumCompressionRate(): number | undefined {
        return this['minimum_compression_rate'];
    }
}