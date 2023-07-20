import { UpdateConfigurationParameterRequestBody } from './UpdateConfigurationParameterRequestBody';


export class UpdateGaussMySqlConfigurationRequest {
    private 'X-Language'?: string;
    private 'configuration_id'?: string;
    public body?: UpdateConfigurationParameterRequestBody;
    public constructor(configurationId?: string) { 
        this['configuration_id'] = configurationId;
    }
    public withXLanguage(xLanguage: string): UpdateGaussMySqlConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigurationId(configurationId: string): UpdateGaussMySqlConfigurationRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: UpdateConfigurationParameterRequestBody): UpdateGaussMySqlConfigurationRequest {
        this['body'] = body;
        return this;
    }
}