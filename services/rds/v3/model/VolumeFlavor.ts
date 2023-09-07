

export class VolumeFlavor {
    private 'engine_version'?: string;
    public code?: string;
    public type?: string;
    public size?: string;
    public period?: Array<string>;
    public constructor(engineVersion?: string, code?: string, type?: string, size?: string, period?: Array<string>) { 
        this['engine_version'] = engineVersion;
        this['code'] = code;
        this['type'] = type;
        this['size'] = size;
        this['period'] = period;
    }
    public withEngineVersion(engineVersion: string): VolumeFlavor {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withCode(code: string): VolumeFlavor {
        this['code'] = code;
        return this;
    }
    public withType(type: string): VolumeFlavor {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): VolumeFlavor {
        this['size'] = size;
        return this;
    }
    public withPeriod(period: Array<string>): VolumeFlavor {
        this['period'] = period;
        return this;
    }
}