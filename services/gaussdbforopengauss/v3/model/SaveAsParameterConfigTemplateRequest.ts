import { SaveAsParameterConfigTemplateRequestBody } from './SaveAsParameterConfigTemplateRequestBody';


export class SaveAsParameterConfigTemplateRequest {
    private 'X-Language'?: string;
    private 'config_id'?: string;
    public body?: SaveAsParameterConfigTemplateRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: string): SaveAsParameterConfigTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): SaveAsParameterConfigTemplateRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: SaveAsParameterConfigTemplateRequestBody): SaveAsParameterConfigTemplateRequest {
        this['body'] = body;
        return this;
    }
}