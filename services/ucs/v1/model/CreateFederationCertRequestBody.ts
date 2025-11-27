

export class CreateFederationCertRequestBody {
    public projectID?: string;
    public vpcID?: string;
    public subnetID?: string;
    public duration?: number;
    public constructor(projectID?: string, vpcID?: string, subnetID?: string, duration?: number) { 
        this['projectID'] = projectID;
        this['vpcID'] = vpcID;
        this['subnetID'] = subnetID;
        this['duration'] = duration;
    }
    public withProjectID(projectID: string): CreateFederationCertRequestBody {
        this['projectID'] = projectID;
        return this;
    }
    public withVpcID(vpcID: string): CreateFederationCertRequestBody {
        this['vpcID'] = vpcID;
        return this;
    }
    public withSubnetID(subnetID: string): CreateFederationCertRequestBody {
        this['subnetID'] = subnetID;
        return this;
    }
    public withDuration(duration: number): CreateFederationCertRequestBody {
        this['duration'] = duration;
        return this;
    }
}