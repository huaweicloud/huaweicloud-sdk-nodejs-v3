import { AuthObjectScopeCluster } from './AuthObjectScopeCluster';


export class AuthObjectScope {
    public cluster?: AuthObjectScopeCluster;
    public constructor() { 
    }
    public withCluster(cluster: AuthObjectScopeCluster): AuthObjectScope {
        this['cluster'] = cluster;
        return this;
    }
}