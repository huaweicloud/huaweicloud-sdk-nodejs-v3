

export class ListGaussMySqlInstanceDetailInfoRequest {
    private 'X-Language'?: string;
    private 'instance_ids'?: string;
    public constructor(instanceIds?: string) { 
        this['instance_ids'] = instanceIds;
    }
    public withXLanguage(xLanguage: string): ListGaussMySqlInstanceDetailInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceIds(instanceIds: string): ListGaussMySqlInstanceDetailInfoRequest {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: string  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): string | undefined {
        return this['instance_ids'];
    }
}