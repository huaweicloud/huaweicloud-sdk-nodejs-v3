

export class CreateFederationConnectionRequestBody {
    public projectID?: string;
    public vpcID?: string;
    public subnetID?: string;
    public constructor(projectID?: string, vpcID?: string, subnetID?: string) { 
        this['projectID'] = projectID;
        this['vpcID'] = vpcID;
        this['subnetID'] = subnetID;
    }
    public withProjectID(projectID: string): CreateFederationConnectionRequestBody {
        this['projectID'] = projectID;
        return this;
    }
    public withVpcID(vpcID: string): CreateFederationConnectionRequestBody {
        this['vpcID'] = vpcID;
        return this;
    }
    public withSubnetID(subnetID: string): CreateFederationConnectionRequestBody {
        this['subnetID'] = subnetID;
        return this;
    }
}