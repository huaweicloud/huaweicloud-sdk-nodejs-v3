

export class CreateUrlAuthchainReq {
    public domain?: string;
    private 'domain_type'?: CreateUrlAuthchainReqDomainTypeEnum | string;
    public stream?: string;
    public app?: string;
    private 'check_level'?: number;
    private 'start_time'?: string;
    public constructor(domain?: string, domainType?: string, stream?: string, app?: string) { 
        this['domain'] = domain;
        this['domain_type'] = domainType;
        this['stream'] = stream;
        this['app'] = app;
    }
    public withDomain(domain: string): CreateUrlAuthchainReq {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: CreateUrlAuthchainReqDomainTypeEnum | string): CreateUrlAuthchainReq {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: CreateUrlAuthchainReqDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): CreateUrlAuthchainReqDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withStream(stream: string): CreateUrlAuthchainReq {
        this['stream'] = stream;
        return this;
    }
    public withApp(app: string): CreateUrlAuthchainReq {
        this['app'] = app;
        return this;
    }
    public withCheckLevel(checkLevel: number): CreateUrlAuthchainReq {
        this['check_level'] = checkLevel;
        return this;
    }
    public set checkLevel(checkLevel: number  | undefined) {
        this['check_level'] = checkLevel;
    }
    public get checkLevel(): number | undefined {
        return this['check_level'];
    }
    public withStartTime(startTime: string): CreateUrlAuthchainReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUrlAuthchainReqDomainTypeEnum {
    PULL = 'pull',
    PUSH = 'push'
}
