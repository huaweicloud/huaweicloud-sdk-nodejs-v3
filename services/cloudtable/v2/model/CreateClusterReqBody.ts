import { CreateClusterReqBodyClusterInfo } from './CreateClusterReqBodyClusterInfo';
import { Datastore } from './Datastore';
import { Nic } from './Nic';


export class CreateClusterReqBody {
    private 'cluster_name'?: string;
    public datastore?: Datastore;
    private 'availability_zone'?: string;
    public nics?: Array<Nic>;
    private 'cluster_info'?: CreateClusterReqBodyClusterInfo;
    private 'enterprise_project_id'?: string;
    private 'vpc_id'?: string;
    public dbuser?: string;
    public dbuserpwd?: string;
    public constructor(clusterName?: string, datastore?: Datastore, availabilityZone?: string, nics?: Array<Nic>, clusterInfo?: CreateClusterReqBodyClusterInfo, vpcId?: string) { 
        this['cluster_name'] = clusterName;
        this['datastore'] = datastore;
        this['availability_zone'] = availabilityZone;
        this['nics'] = nics;
        this['cluster_info'] = clusterInfo;
        this['vpc_id'] = vpcId;
    }
    public withClusterName(clusterName: string): CreateClusterReqBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatastore(datastore: Datastore): CreateClusterReqBody {
        this['datastore'] = datastore;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateClusterReqBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withNics(nics: Array<Nic>): CreateClusterReqBody {
        this['nics'] = nics;
        return this;
    }
    public withClusterInfo(clusterInfo: CreateClusterReqBodyClusterInfo): CreateClusterReqBody {
        this['cluster_info'] = clusterInfo;
        return this;
    }
    public set clusterInfo(clusterInfo: CreateClusterReqBodyClusterInfo  | undefined) {
        this['cluster_info'] = clusterInfo;
    }
    public get clusterInfo(): CreateClusterReqBodyClusterInfo | undefined {
        return this['cluster_info'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterReqBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVpcId(vpcId: string): CreateClusterReqBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDbuser(dbuser: string): CreateClusterReqBody {
        this['dbuser'] = dbuser;
        return this;
    }
    public withDbuserpwd(dbuserpwd: string): CreateClusterReqBody {
        this['dbuserpwd'] = dbuserpwd;
        return this;
    }
}