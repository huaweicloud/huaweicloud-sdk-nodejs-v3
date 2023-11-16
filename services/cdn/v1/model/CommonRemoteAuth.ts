import { RemoteAuthRuleVo } from './RemoteAuthRuleVo';


export class CommonRemoteAuth {
    private 'remote_authentication'?: string;
    private 'remote_auth_rules'?: RemoteAuthRuleVo;
    public constructor(remoteAuthentication?: string, remoteAuthRules?: RemoteAuthRuleVo) { 
        this['remote_authentication'] = remoteAuthentication;
        this['remote_auth_rules'] = remoteAuthRules;
    }
    public withRemoteAuthentication(remoteAuthentication: string): CommonRemoteAuth {
        this['remote_authentication'] = remoteAuthentication;
        return this;
    }
    public set remoteAuthentication(remoteAuthentication: string  | undefined) {
        this['remote_authentication'] = remoteAuthentication;
    }
    public get remoteAuthentication(): string | undefined {
        return this['remote_authentication'];
    }
    public withRemoteAuthRules(remoteAuthRules: RemoteAuthRuleVo): CommonRemoteAuth {
        this['remote_auth_rules'] = remoteAuthRules;
        return this;
    }
    public set remoteAuthRules(remoteAuthRules: RemoteAuthRuleVo  | undefined) {
        this['remote_auth_rules'] = remoteAuthRules;
    }
    public get remoteAuthRules(): RemoteAuthRuleVo | undefined {
        return this['remote_auth_rules'];
    }
}