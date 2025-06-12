import { SecurityOptions } from './SecurityOptions';


export class UpdateServerOption {
    public name?: string;
    public description?: string;
    public hostname?: string;
    private 'security_options'?: SecurityOptions;
    private 'user_data'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateServerOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateServerOption {
        this['description'] = description;
        return this;
    }
    public withHostname(hostname: string): UpdateServerOption {
        this['hostname'] = hostname;
        return this;
    }
    public withSecurityOptions(securityOptions: SecurityOptions): UpdateServerOption {
        this['security_options'] = securityOptions;
        return this;
    }
    public set securityOptions(securityOptions: SecurityOptions  | undefined) {
        this['security_options'] = securityOptions;
    }
    public get securityOptions(): SecurityOptions | undefined {
        return this['security_options'];
    }
    public withUserData(userData: string): UpdateServerOption {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
}