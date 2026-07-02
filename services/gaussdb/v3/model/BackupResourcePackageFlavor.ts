

export class BackupResourcePackageFlavor {
    private 'spce_code'?: string;
    public volume?: string;
    public constructor(spceCode?: string, volume?: string) { 
        this['spce_code'] = spceCode;
        this['volume'] = volume;
    }
    public withSpceCode(spceCode: string): BackupResourcePackageFlavor {
        this['spce_code'] = spceCode;
        return this;
    }
    public set spceCode(spceCode: string  | undefined) {
        this['spce_code'] = spceCode;
    }
    public get spceCode(): string | undefined {
        return this['spce_code'];
    }
    public withVolume(volume: string): BackupResourcePackageFlavor {
        this['volume'] = volume;
        return this;
    }
}