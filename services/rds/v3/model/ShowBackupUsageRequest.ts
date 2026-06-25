

export class ShowBackupUsageRequest {
    public engine?: string;
    private 'X-Language'?: string;
    public constructor() { 
    }
    public withEngine(engine: string): ShowBackupUsageRequest {
        this['engine'] = engine;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowBackupUsageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}