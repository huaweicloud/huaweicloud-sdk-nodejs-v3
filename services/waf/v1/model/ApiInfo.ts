

export class ApiInfo {
    public status?: number;
    private 'source_id'?: string;
    private 'source_secret'?: string;
    public constructor() { 
    }
    public withStatus(status: number): ApiInfo {
        this['status'] = status;
        return this;
    }
    public withSourceId(sourceId: string): ApiInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceSecret(sourceSecret: string): ApiInfo {
        this['source_secret'] = sourceSecret;
        return this;
    }
    public set sourceSecret(sourceSecret: string  | undefined) {
        this['source_secret'] = sourceSecret;
    }
    public get sourceSecret(): string | undefined {
        return this['source_secret'];
    }
}