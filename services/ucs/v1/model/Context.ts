

export class Context {
    public cluster?: string;
    public user?: string;
    public constructor() { 
    }
    public withCluster(cluster: string): Context {
        this['cluster'] = cluster;
        return this;
    }
    public withUser(user: string): Context {
        this['user'] = user;
        return this;
    }
}