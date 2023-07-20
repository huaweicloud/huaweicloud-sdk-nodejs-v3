import { PublicIp } from './PublicIp';
import { Tags } from './Tags';


export class CreateClusterInfo {
    private 'node_type'?: string;
    private 'number_of_node'?: number;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'vpc_id'?: string;
    private 'availability_zone'?: string;
    public port?: number;
    public name?: string;
    private 'user_name'?: string;
    private 'user_pwd'?: string;
    private 'public_ip'?: PublicIp;
    private 'number_of_cn'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Tags;
    public constructor(nodeType?: string, numberOfNode?: number, subnetId?: string, securityGroupId?: string, vpcId?: string, name?: string, userName?: string, userPwd?: string) { 
        this['node_type'] = nodeType;
        this['number_of_node'] = numberOfNode;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['vpc_id'] = vpcId;
        this['name'] = name;
        this['user_name'] = userName;
        this['user_pwd'] = userPwd;
    }
    public withNodeType(nodeType: string): CreateClusterInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNumberOfNode(numberOfNode: number): CreateClusterInfo {
        this['number_of_node'] = numberOfNode;
        return this;
    }
    public set numberOfNode(numberOfNode: number  | undefined) {
        this['number_of_node'] = numberOfNode;
    }
    public get numberOfNode(): number | undefined {
        return this['number_of_node'];
    }
    public withSubnetId(subnetId: string): CreateClusterInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateClusterInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withVpcId(vpcId: string): CreateClusterInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateClusterInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withPort(port: number): CreateClusterInfo {
        this['port'] = port;
        return this;
    }
    public withName(name: string): CreateClusterInfo {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): CreateClusterInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPwd(userPwd: string): CreateClusterInfo {
        this['user_pwd'] = userPwd;
        return this;
    }
    public set userPwd(userPwd: string  | undefined) {
        this['user_pwd'] = userPwd;
    }
    public get userPwd(): string | undefined {
        return this['user_pwd'];
    }
    public withPublicIp(publicIp: PublicIp): CreateClusterInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): PublicIp | undefined {
        return this['public_ip'];
    }
    public withNumberOfCn(numberOfCn: number): CreateClusterInfo {
        this['number_of_cn'] = numberOfCn;
        return this;
    }
    public set numberOfCn(numberOfCn: number  | undefined) {
        this['number_of_cn'] = numberOfCn;
    }
    public get numberOfCn(): number | undefined {
        return this['number_of_cn'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Tags): CreateClusterInfo {
        this['tags'] = tags;
        return this;
    }
}