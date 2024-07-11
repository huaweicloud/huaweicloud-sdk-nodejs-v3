

export class ListHlsConfigRequest {
    private 'push_domain'?: string;
    public constructor(pushDomain?: string) { 
        this['push_domain'] = pushDomain;
    }
    public withPushDomain(pushDomain: string): ListHlsConfigRequest {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string  | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain(): string | undefined {
        return this['push_domain'];
    }
}