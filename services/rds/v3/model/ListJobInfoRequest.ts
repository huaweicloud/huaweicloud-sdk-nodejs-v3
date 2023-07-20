

export class ListJobInfoRequest {
    private 'X-Language'?: string;
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withXLanguage(xLanguage: string): ListJobInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListJobInfoRequest {
        this['id'] = id;
        return this;
    }
}