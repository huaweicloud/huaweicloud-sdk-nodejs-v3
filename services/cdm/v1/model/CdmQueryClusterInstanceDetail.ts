import { CdmQueryClusterInstanceDetailFlavor } from './CdmQueryClusterInstanceDetailFlavor';
import { Datastore } from './Datastore';


export class CdmQueryClusterInstanceDetail {
    public configurationStatus?: string;
    public paramsGroupId?: string;
    public type?: string;
    public role?: string;
    public subnetid?: string;
    public securegroup?: string;
    public vpc?: string;
    public azcode?: string;
    public region?: string;
    public created?: string;
    public updated?: string;
    public name?: string;
    public id?: string;
    public flavor?: CdmQueryClusterInstanceDetailFlavor;
    public datastore?: Datastore;
    public dbuser?: string;
    public payModel?: number;
    public publicIp?: string;
    public trafficIp?: string;
    public trafficIpv6?: string;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withConfigurationStatus(configurationStatus: string): CdmQueryClusterInstanceDetail {
        this['configurationStatus'] = configurationStatus;
        return this;
    }
    public withParamsGroupId(paramsGroupId: string): CdmQueryClusterInstanceDetail {
        this['paramsGroupId'] = paramsGroupId;
        return this;
    }
    public withType(type: string): CdmQueryClusterInstanceDetail {
        this['type'] = type;
        return this;
    }
    public withRole(role: string): CdmQueryClusterInstanceDetail {
        this['role'] = role;
        return this;
    }
    public withSubnetid(subnetid: string): CdmQueryClusterInstanceDetail {
        this['subnetid'] = subnetid;
        return this;
    }
    public withSecuregroup(securegroup: string): CdmQueryClusterInstanceDetail {
        this['securegroup'] = securegroup;
        return this;
    }
    public withVpc(vpc: string): CdmQueryClusterInstanceDetail {
        this['vpc'] = vpc;
        return this;
    }
    public withAzcode(azcode: string): CdmQueryClusterInstanceDetail {
        this['azcode'] = azcode;
        return this;
    }
    public withRegion(region: string): CdmQueryClusterInstanceDetail {
        this['region'] = region;
        return this;
    }
    public withCreated(created: string): CdmQueryClusterInstanceDetail {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): CdmQueryClusterInstanceDetail {
        this['updated'] = updated;
        return this;
    }
    public withName(name: string): CdmQueryClusterInstanceDetail {
        this['name'] = name;
        return this;
    }
    public withId(id: string): CdmQueryClusterInstanceDetail {
        this['id'] = id;
        return this;
    }
    public withFlavor(flavor: CdmQueryClusterInstanceDetailFlavor): CdmQueryClusterInstanceDetail {
        this['flavor'] = flavor;
        return this;
    }
    public withDatastore(datastore: Datastore): CdmQueryClusterInstanceDetail {
        this['datastore'] = datastore;
        return this;
    }
    public withDbuser(dbuser: string): CdmQueryClusterInstanceDetail {
        this['dbuser'] = dbuser;
        return this;
    }
    public withPayModel(payModel: number): CdmQueryClusterInstanceDetail {
        this['payModel'] = payModel;
        return this;
    }
    public withPublicIp(publicIp: string): CdmQueryClusterInstanceDetail {
        this['publicIp'] = publicIp;
        return this;
    }
    public withTrafficIp(trafficIp: string): CdmQueryClusterInstanceDetail {
        this['trafficIp'] = trafficIp;
        return this;
    }
    public withTrafficIpv6(trafficIpv6: string): CdmQueryClusterInstanceDetail {
        this['trafficIpv6'] = trafficIpv6;
        return this;
    }
    public withClusterId(clusterId: string): CdmQueryClusterInstanceDetail {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}