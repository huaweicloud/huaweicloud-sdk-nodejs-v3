import { PublicIp } from './PublicIp';
import { Tags } from './Tags';
import { Volume } from './Volume';


export class V2CreateCluster {
    public name: string;
    public flavor: string;
    private 'num_cn': number | undefined;
    private 'num_node': number | undefined;
    private 'db_name': string | undefined;
    private 'db_password': string | undefined;
    private 'db_port': number | undefined;
    private 'dss_pool_id'?: string | undefined;
    private 'availability_zones': Array<string> | undefined;
    public tags?: Tags;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'public_ip'?: PublicIp | undefined;
    private 'datastore_version': string | undefined;
    private 'master_key_id'?: string | undefined;
    private 'master_key_name'?: string | undefined;
    private 'crypt_algorithm'?: string | undefined;
    public volume?: Volume;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any, flavor?: any, numCn?: any, numNode?: any, dbName?: any, dbPassword?: any, dbPort?: any, availabilityZones?: any, vpcId?: any, subnetId?: any, datastoreVersion?: any) { 
        this['name'] = name;
        this['flavor'] = flavor;
        this['num_cn'] = numCn;
        this['num_node'] = numNode;
        this['db_name'] = dbName;
        this['db_password'] = dbPassword;
        this['db_port'] = dbPort;
        this['availability_zones'] = availabilityZones;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['datastore_version'] = datastoreVersion;
    }
    public withName(name: string): V2CreateCluster {
        this['name'] = name;
        return this;
    }
    public withFlavor(flavor: string): V2CreateCluster {
        this['flavor'] = flavor;
        return this;
    }
    public withNumCn(numCn: number): V2CreateCluster {
        this['num_cn'] = numCn;
        return this;
    }
    public set numCn(numCn: number | undefined) {
        this['num_cn'] = numCn;
    }
    public get numCn() {
        return this['num_cn'];
    }
    public withNumNode(numNode: number): V2CreateCluster {
        this['num_node'] = numNode;
        return this;
    }
    public set numNode(numNode: number | undefined) {
        this['num_node'] = numNode;
    }
    public get numNode() {
        return this['num_node'];
    }
    public withDbName(dbName: string): V2CreateCluster {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withDbPassword(dbPassword: string): V2CreateCluster {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword() {
        return this['db_password'];
    }
    public withDbPort(dbPort: number): V2CreateCluster {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort() {
        return this['db_port'];
    }
    public withDssPoolId(dssPoolId: string): V2CreateCluster {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId() {
        return this['dss_pool_id'];
    }
    public withAvailabilityZones(availabilityZones: Array<string>): V2CreateCluster {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string> | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones() {
        return this['availability_zones'];
    }
    public withTags(tags: Tags): V2CreateCluster {
        this['tags'] = tags;
        return this;
    }
    public withVpcId(vpcId: string): V2CreateCluster {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): V2CreateCluster {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): V2CreateCluster {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withPublicIp(publicIp: PublicIp): V2CreateCluster {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withDatastoreVersion(datastoreVersion: string): V2CreateCluster {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion() {
        return this['datastore_version'];
    }
    public withMasterKeyId(masterKeyId: string): V2CreateCluster {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId() {
        return this['master_key_id'];
    }
    public withMasterKeyName(masterKeyName: string): V2CreateCluster {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName() {
        return this['master_key_name'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): V2CreateCluster {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm() {
        return this['crypt_algorithm'];
    }
    public withVolume(volume: Volume): V2CreateCluster {
        this['volume'] = volume;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): V2CreateCluster {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}