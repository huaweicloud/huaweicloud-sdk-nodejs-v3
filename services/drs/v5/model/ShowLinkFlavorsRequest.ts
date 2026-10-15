

export class ShowLinkFlavorsRequest {
    private 'X-Language'?: ShowLinkFlavorsRequestXLanguageEnum | string;
    private 'engine_type'?: string;
    private 'job_type'?: string;
    private 'job_direction'?: string;
    private 'net_type'?: string;
    private 'node_type'?: string;
    private 'is_multi_write'?: boolean;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowLinkFlavorsRequestXLanguageEnum | string): ShowLinkFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowLinkFlavorsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowLinkFlavorsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEngineType(engineType: string): ShowLinkFlavorsRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withJobType(jobType: string): ShowLinkFlavorsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobDirection(jobDirection: string): ShowLinkFlavorsRequest {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): string | undefined {
        return this['job_direction'];
    }
    public withNetType(netType: string): ShowLinkFlavorsRequest {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): string | undefined {
        return this['net_type'];
    }
    public withNodeType(nodeType: string): ShowLinkFlavorsRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withIsMultiWrite(isMultiWrite: boolean): ShowLinkFlavorsRequest {
        this['is_multi_write'] = isMultiWrite;
        return this;
    }
    public set isMultiWrite(isMultiWrite: boolean  | undefined) {
        this['is_multi_write'] = isMultiWrite;
    }
    public get isMultiWrite(): boolean | undefined {
        return this['is_multi_write'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLinkFlavorsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
