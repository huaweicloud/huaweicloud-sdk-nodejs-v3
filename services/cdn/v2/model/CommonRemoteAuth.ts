import { RemoteAuthRule } from './RemoteAuthRule';


export class CommonRemoteAuth {
    private 'remote_authentication'?: string;
    private 'remote_auth_rules'?: RemoteAuthRule;
    public constructor(remoteAuthentication?: string, remoteAuthRules?: RemoteAuthRule) { 
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
    public withRemoteAuthRules(remoteAuthRules: RemoteAuthRule): CommonRemoteAuth {
        this['remote_auth_rules'] = remoteAuthRules;
        return this;
    }
    public set remoteAuthRules(remoteAuthRules: RemoteAuthRule  | undefined) {
        this['remote_auth_rules'] = remoteAuthRules;
    }
    public get remoteAuthRules(): RemoteAuthRule | undefined {
        return this['remote_auth_rules'];
    }
}