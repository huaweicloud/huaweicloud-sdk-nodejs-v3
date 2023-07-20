import { ApplyConfigurationRequestBody } from './ApplyConfigurationRequestBody';


export class SwitchGaussMySqlConfigurationRequest {
    private 'X-Language'?: string;
    private 'configuration_id'?: string;
    public body?: ApplyConfigurationRequestBody;
    public constructor(configurationId?: string) { 
        this['configuration_id'] = configurationId;
    }
    public withXLanguage(xLanguage: string): SwitchGaussMySqlConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigurationId(configurationId: string): SwitchGaussMySqlConfigurationRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: ApplyConfigurationRequestBody): SwitchGaussMySqlConfigurationRequest {
        this['body'] = body;
        return this;
    }
}