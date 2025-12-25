

export class RegisterClusterSpec {
    public clusterGroupID?: string;
    public category?: string;
    public type?: string;
    public provider?: string;
    public country?: string;
    public city?: string;
    public region?: string;
    public projectID?: string;
    public manageType?: string;
    public constructor(category?: string, type?: string, provider?: string, country?: string, city?: string, manageType?: string) { 
        this['category'] = category;
        this['type'] = type;
        this['provider'] = provider;
        this['country'] = country;
        this['city'] = city;
        this['manageType'] = manageType;
    }
    public withClusterGroupID(clusterGroupID: string): RegisterClusterSpec {
        this['clusterGroupID'] = clusterGroupID;
        return this;
    }
    public withCategory(category: string): RegisterClusterSpec {
        this['category'] = category;
        return this;
    }
    public withType(type: string): RegisterClusterSpec {
        this['type'] = type;
        return this;
    }
    public withProvider(provider: string): RegisterClusterSpec {
        this['provider'] = provider;
        return this;
    }
    public withCountry(country: string): RegisterClusterSpec {
        this['country'] = country;
        return this;
    }
    public withCity(city: string): RegisterClusterSpec {
        this['city'] = city;
        return this;
    }
    public withRegion(region: string): RegisterClusterSpec {
        this['region'] = region;
        return this;
    }
    public withProjectID(projectID: string): RegisterClusterSpec {
        this['projectID'] = projectID;
        return this;
    }
    public withManageType(manageType: string): RegisterClusterSpec {
        this['manageType'] = manageType;
        return this;
    }
}