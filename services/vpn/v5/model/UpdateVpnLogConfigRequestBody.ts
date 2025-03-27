import { UpdateVpnLogConfigRequestBodyContent } from './UpdateVpnLogConfigRequestBodyContent';


export class UpdateVpnLogConfigRequestBody {
    private 'log_config'?: UpdateVpnLogConfigRequestBodyContent;
    public constructor(logConfig?: UpdateVpnLogConfigRequestBodyContent) { 
        this['log_config'] = logConfig;
    }
    public withLogConfig(logConfig: UpdateVpnLogConfigRequestBodyContent): UpdateVpnLogConfigRequestBody {
        this['log_config'] = logConfig;
        return this;
    }
    public set logConfig(logConfig: UpdateVpnLogConfigRequestBodyContent  | undefined) {
        this['log_config'] = logConfig;
    }
    public get logConfig(): UpdateVpnLogConfigRequestBodyContent | undefined {
        return this['log_config'];
    }
}