import { ResponseConfigDto } from './ResponseConfigDto';


export class UpdateApplicationInstanceResponseConfigurationReqBody {
    private 'response_config'?: ResponseConfigDto;
    public constructor(responseConfig?: ResponseConfigDto) { 
        this['response_config'] = responseConfig;
    }
    public withResponseConfig(responseConfig: ResponseConfigDto): UpdateApplicationInstanceResponseConfigurationReqBody {
        this['response_config'] = responseConfig;
        return this;
    }
    public set responseConfig(responseConfig: ResponseConfigDto  | undefined) {
        this['response_config'] = responseConfig;
    }
    public get responseConfig(): ResponseConfigDto | undefined {
        return this['response_config'];
    }
}