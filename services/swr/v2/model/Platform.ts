

export class Platform {
    public architecture?: string;
    public os?: string;
    private 'os.version'?: string;
    private 'os.features'?: Array<string>;
    public variant?: string;
    public constructor() { 
    }
    public withArchitecture(architecture: string): Platform {
        this['architecture'] = architecture;
        return this;
    }
    public withOs(os: string): Platform {
        this['os'] = os;
        return this;
    }
    public withOsVersion(osVersion: string): Platform {
        this['os.version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os.version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os.version'];
    }
    public withOsFeatures(osFeatures: Array<string>): Platform {
        this['os.features'] = osFeatures;
        return this;
    }
    public set osFeatures(osFeatures: Array<string>  | undefined) {
        this['os.features'] = osFeatures;
    }
    public get osFeatures(): Array<string> | undefined {
        return this['os.features'];
    }
    public withVariant(variant: string): Platform {
        this['variant'] = variant;
        return this;
    }
}