import { Endpoints } from './Endpoints';
import { FailedReason } from './FailedReason';
import { Nodes } from './Nodes';
import { PublicEndpoints } from './PublicEndpoints';
import { PublicIp } from './PublicIp';
import { Tags } from './Tags';


export class ClusterInfo {
    public id: string;
    public name: string;
    public status: string;
    public version: string;
    public updated: string;
    public created: string;
    public port: number;
    public endpoints: Array<Endpoints>;
    public nodes: Array<Nodes>;
    public tags: Array<Tags>;
    private 'user_name': string | undefined;
    private 'number_of_node': number | undefined;
    private 'recent_event': number | undefined;
    private 'availability_zone': string | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'node_type': string | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'public_ip': PublicIp | undefined;
    private 'public_endpoints': Array<PublicEndpoints> | undefined;
    private 'action_progress': { [key: string]: string; } | undefined;
    private 'sub_status': string | undefined;
    private 'task_status': string | undefined;
    private 'security_group_id': string | undefined;
    private 'failed_reasons'?: FailedReason | undefined;
    public constructor(id?: any, name?: any, status?: any, version?: any, updated?: any, created?: any, port?: any, endpoints?: any, nodes?: any, tags?: any, userName?: any, numberOfNode?: any, recentEvent?: any, availabilityZone?: any, enterpriseProjectId?: any, nodeType?: any, vpcId?: any, subnetId?: any, publicIp?: any, publicEndpoints?: any, actionProgress?: any, subStatus?: any, taskStatus?: any, securityGroupId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['version'] = version;
        this['updated'] = updated;
        this['created'] = created;
        this['port'] = port;
        this['endpoints'] = endpoints;
        this['nodes'] = nodes;
        this['tags'] = tags;
        this['user_name'] = userName;
        this['number_of_node'] = numberOfNode;
        this['recent_event'] = recentEvent;
        this['availability_zone'] = availabilityZone;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['node_type'] = nodeType;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['public_ip'] = publicIp;
        this['public_endpoints'] = publicEndpoints;
        this['action_progress'] = actionProgress;
        this['sub_status'] = subStatus;
        this['task_status'] = taskStatus;
        this['security_group_id'] = securityGroupId;
    }
    public withId(id: string): ClusterInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ClusterInfo {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ClusterInfo {
        this['version'] = version;
        return this;
    }
    public withUpdated(updated: string): ClusterInfo {
        this['updated'] = updated;
        return this;
    }
    public withCreated(created: string): ClusterInfo {
        this['created'] = created;
        return this;
    }
    public withPort(port: number): ClusterInfo {
        this['port'] = port;
        return this;
    }
    public withEndpoints(endpoints: Array<Endpoints>): ClusterInfo {
        this['endpoints'] = endpoints;
        return this;
    }
    public withNodes(nodes: Array<Nodes>): ClusterInfo {
        this['nodes'] = nodes;
        return this;
    }
    public withTags(tags: Array<Tags>): ClusterInfo {
        this['tags'] = tags;
        return this;
    }
    public withUserName(userName: string): ClusterInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withNumberOfNode(numberOfNode: number): ClusterInfo {
        this['number_of_node'] = numberOfNode;
        return this;
    }
    public set numberOfNode(numberOfNode: number | undefined) {
        this['number_of_node'] = numberOfNode;
    }
    public get numberOfNode() {
        return this['number_of_node'];
    }
    public withRecentEvent(recentEvent: number): ClusterInfo {
        this['recent_event'] = recentEvent;
        return this;
    }
    public set recentEvent(recentEvent: number | undefined) {
        this['recent_event'] = recentEvent;
    }
    public get recentEvent() {
        return this['recent_event'];
    }
    public withAvailabilityZone(availabilityZone: string): ClusterInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withNodeType(nodeType: string): ClusterInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withVpcId(vpcId: string): ClusterInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ClusterInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withPublicIp(publicIp: PublicIp): ClusterInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withPublicEndpoints(publicEndpoints: Array<PublicEndpoints>): ClusterInfo {
        this['public_endpoints'] = publicEndpoints;
        return this;
    }
    public set publicEndpoints(publicEndpoints: Array<PublicEndpoints> | undefined) {
        this['public_endpoints'] = publicEndpoints;
    }
    public get publicEndpoints() {
        return this['public_endpoints'];
    }
    public withActionProgress(actionProgress: { [key: string]: string; }): ClusterInfo {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: { [key: string]: string; } | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress() {
        return this['action_progress'];
    }
    public withSubStatus(subStatus: string): ClusterInfo {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus() {
        return this['sub_status'];
    }
    public withTaskStatus(taskStatus: string): ClusterInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus() {
        return this['task_status'];
    }
    public withSecurityGroupId(securityGroupId: string): ClusterInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withFailedReasons(failedReasons: FailedReason): ClusterInfo {
        this['failed_reasons'] = failedReasons;
        return this;
    }
    public set failedReasons(failedReasons: FailedReason | undefined) {
        this['failed_reasons'] = failedReasons;
    }
    public get failedReasons() {
        return this['failed_reasons'];
    }
}