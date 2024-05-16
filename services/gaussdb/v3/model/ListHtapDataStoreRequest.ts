

export class ListHtapDataStoreRequest {
    private 'engine_name'?: string;
    private 'X-Language'?: string;
    public constructor(engineName?: string) { 
        this['engine_name'] = engineName;
    }
    public withEngineName(engineName: string): ListHtapDataStoreRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withXLanguage(xLanguage: string): ListHtapDataStoreRequest {
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