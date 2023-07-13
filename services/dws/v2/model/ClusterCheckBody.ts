import { OpenPublicIp } from './OpenPublicIp';
import { RestorePoint } from './RestorePoint';
import { Tag } from './Tag';
import { Volume } from './Volume';


export class ClusterCheckBody {
    private 'enterprise_project_id'?: string | undefined;
    public flavor: string;
    private 'availability_zones': Array<string> | undefined;
    private 'num_node': number | undefined;
    private 'security_group_id'?: string | undefined;
    private 'datastore_version': string | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'public_ip'?: OpenPublicIp | undefined;
    private 'cross_spec_restore'?: string | undefined;
    public volume?: Volume;
    private 'old_cluster_hostname'?: string | undefined;
    private 'restore_point'?: RestorePoint | undefined;
    private 'tag_list'?: Array<Tag> | undefined;
    private 'dss_pool_id'?: string | undefined;
    private 'db_port'?: string | undefined;
    private 'db_password'?: string | undefined;
    private 'db_name'?: string | undefined;
    private 'num_cn'?: number | undefined;
    public name?: string;
    public constructor(flavor?: any, availabilityZones?: any, numNode?: any, datastoreVersion?: any, vpcId?: any, subnetId?: any) { 
        this['flavor'] = flavor;
        this['availability_zones'] = availabilityZones;
        this['num_node'] = numNode;
        this['datastore_version'] = datastoreVersion;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterCheckBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFlavor(flavor: string): ClusterCheckBody {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZones(availabilityZones: Array<string>): ClusterCheckBody {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string> | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones() {
        return this['availability_zones'];
    }
    public withNumNode(numNode: number): ClusterCheckBody {
        this['num_node'] = numNode;
        return this;
    }
    public set numNode(numNode: number | undefined) {
        this['num_node'] = numNode;
    }
    public get numNode() {
        return this['num_node'];
    }
    public withSecurityGroupId(securityGroupId: string): ClusterCheckBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withDatastoreVersion(datastoreVersion: string): ClusterCheckBody {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion() {
        return this['datastore_version'];
    }
    public withVpcId(vpcId: string): ClusterCheckBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ClusterCheckBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withPublicIp(publicIp: OpenPublicIp): ClusterCheckBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: OpenPublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withCrossSpecRestore(crossSpecRestore: string): ClusterCheckBody {
        this['cross_spec_restore'] = crossSpecRestore;
        return this;
    }
    public set crossSpecRestore(crossSpecRestore: string | undefined) {
        this['cross_spec_restore'] = crossSpecRestore;
    }
    public get crossSpecRestore() {
        return this['cross_spec_restore'];
    }
    public withVolume(volume: Volume): ClusterCheckBody {
        this['volume'] = volume;
        return this;
    }
    public withOldClusterHostname(oldClusterHostname: string): ClusterCheckBody {
        this['old_cluster_hostname'] = oldClusterHostname;
        return this;
    }
    public set oldClusterHostname(oldClusterHostname: string | undefined) {
        this['old_cluster_hostname'] = oldClusterHostname;
    }
    public get oldClusterHostname() {
        return this['old_cluster_hostname'];
    }
    public withRestorePoint(restorePoint: RestorePoint): ClusterCheckBody {
        this['restore_point'] = restorePoint;
        return this;
    }
    public set restorePoint(restorePoint: RestorePoint | undefined) {
        this['restore_point'] = restorePoint;
    }
    public get restorePoint() {
        return this['restore_point'];
    }
    public withTagList(tagList: Array<Tag>): ClusterCheckBody {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<Tag> | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList() {
        return this['tag_list'];
    }
    public withDssPoolId(dssPoolId: string): ClusterCheckBody {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId() {
        return this['dss_pool_id'];
    }
    public withDbPort(dbPort: string): ClusterCheckBody {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: string | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort() {
        return this['db_port'];
    }
    public withDbPassword(dbPassword: string): ClusterCheckBody {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword() {
        return this['db_password'];
    }
    public withDbName(dbName: string): ClusterCheckBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withNumCn(numCn: number): ClusterCheckBody {
        this['num_cn'] = numCn;
        return this;
    }
    public set numCn(numCn: number | undefined) {
        this['num_cn'] = numCn;
    }
    public get numCn() {
        return this['num_cn'];
    }
    public withName(name: string): ClusterCheckBody {
        this['name'] = name;
        return this;
    }
}