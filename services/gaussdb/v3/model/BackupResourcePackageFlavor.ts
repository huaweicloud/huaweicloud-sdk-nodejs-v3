

export class BackupResourcePackageFlavor {
    private 'spec_code'?: string;
    public volume?: string;
    public constructor(specCode?: string, volume?: string) { 
        this['spec_code'] = specCode;
        this['volume'] = volume;
    }
    public withSpecCode(specCode: string): BackupResourcePackageFlavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withVolume(volume: string): BackupResourcePackageFlavor {
        this['volume'] = volume;
        return this;
    }
}