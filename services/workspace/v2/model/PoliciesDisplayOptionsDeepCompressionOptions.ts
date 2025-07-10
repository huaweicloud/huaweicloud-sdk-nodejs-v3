

export class PoliciesDisplayOptionsDeepCompressionOptions {
    private 'deep_compression_level'?: string;
    public constructor() { 
    }
    public withDeepCompressionLevel(deepCompressionLevel: string): PoliciesDisplayOptionsDeepCompressionOptions {
        this['deep_compression_level'] = deepCompressionLevel;
        return this;
    }
    public set deepCompressionLevel(deepCompressionLevel: string  | undefined) {
        this['deep_compression_level'] = deepCompressionLevel;
    }
    public get deepCompressionLevel(): string | undefined {
        return this['deep_compression_level'];
    }
}