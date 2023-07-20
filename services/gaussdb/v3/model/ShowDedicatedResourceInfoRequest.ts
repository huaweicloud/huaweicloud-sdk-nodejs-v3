

export class ShowDedicatedResourceInfoRequest {
    private 'X-Language'?: string;
    private 'dedicated_resource_id'?: string;
    public constructor(dedicatedResourceId?: string) { 
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public withXLanguage(xLanguage: string): ShowDedicatedResourceInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): ShowDedicatedResourceInfoRequest {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
}