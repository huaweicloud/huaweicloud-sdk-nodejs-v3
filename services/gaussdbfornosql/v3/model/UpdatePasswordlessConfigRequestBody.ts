

export class UpdatePasswordlessConfigRequestBody {
    private 'config_ips'?: Array<string>;
    public constructor(configIps?: Array<string>) { 
        this['config_ips'] = configIps;
    }
    public withConfigIps(configIps: Array<string>): UpdatePasswordlessConfigRequestBody {
        this['config_ips'] = configIps;
        return this;
    }
    public set configIps(configIps: Array<string>  | undefined) {
        this['config_ips'] = configIps;
    }
    public get configIps(): Array<string> | undefined {
        return this['config_ips'];
    }
}