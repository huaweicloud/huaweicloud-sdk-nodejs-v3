import { ApplyConfigurationRequest } from './ApplyConfigurationRequest';


export class EnableConfigurationRequest {
    private 'X-Language'?: string;
    private 'config_id'?: string;
    public body?: ApplyConfigurationRequest;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: string): EnableConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): EnableConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationRequest): EnableConfigurationRequest {
        this['body'] = body;
        return this;
    }
}