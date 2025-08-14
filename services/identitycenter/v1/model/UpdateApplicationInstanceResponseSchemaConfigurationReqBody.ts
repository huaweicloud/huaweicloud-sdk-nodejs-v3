import { ResponseSchemaConfigDto } from './ResponseSchemaConfigDto';


export class UpdateApplicationInstanceResponseSchemaConfigurationReqBody {
    private 'response_schema_config'?: ResponseSchemaConfigDto;
    public constructor(responseSchemaConfig?: ResponseSchemaConfigDto) { 
        this['response_schema_config'] = responseSchemaConfig;
    }
    public withResponseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto): UpdateApplicationInstanceResponseSchemaConfigurationReqBody {
        this['response_schema_config'] = responseSchemaConfig;
        return this;
    }
    public set responseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto  | undefined) {
        this['response_schema_config'] = responseSchemaConfig;
    }
    public get responseSchemaConfig(): ResponseSchemaConfigDto | undefined {
        return this['response_schema_config'];
    }
}