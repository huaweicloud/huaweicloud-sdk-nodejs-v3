

export class CustomerConfig {
    public failureRemind?: string;
    public clusterName?: string;
    public serviceProvider?: string;
    public localDisk?: string;
    public ssl?: string;
    public createFrom?: string;
    public resourceId?: string;
    public flavorType?: string;
    public workSpaceId?: string;
    public trial?: string;
    public constructor() { 
    }
    public withFailureRemind(failureRemind: string): CustomerConfig {
        this['failureRemind'] = failureRemind;
        return this;
    }
    public withClusterName(clusterName: string): CustomerConfig {
        this['clusterName'] = clusterName;
        return this;
    }
    public withServiceProvider(serviceProvider: string): CustomerConfig {
        this['serviceProvider'] = serviceProvider;
        return this;
    }
    public withLocalDisk(localDisk: string): CustomerConfig {
        this['localDisk'] = localDisk;
        return this;
    }
    public withSsl(ssl: string): CustomerConfig {
        this['ssl'] = ssl;
        return this;
    }
    public withCreateFrom(createFrom: string): CustomerConfig {
        this['createFrom'] = createFrom;
        return this;
    }
    public withResourceId(resourceId: string): CustomerConfig {
        this['resourceId'] = resourceId;
        return this;
    }
    public withFlavorType(flavorType: string): CustomerConfig {
        this['flavorType'] = flavorType;
        return this;
    }
    public withWorkSpaceId(workSpaceId: string): CustomerConfig {
        this['workSpaceId'] = workSpaceId;
        return this;
    }
    public withTrial(trial: string): CustomerConfig {
        this['trial'] = trial;
        return this;
    }
}