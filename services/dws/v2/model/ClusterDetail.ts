import { ElbResp } from './ElbResp';
import { Endpoints } from './Endpoints';
import { FailedReason } from './FailedReason';
import { MaintainWindow } from './MaintainWindow';
import { Nodes } from './Nodes';
import { ParameterGroup } from './ParameterGroup';
import { PublicEndpoints } from './PublicEndpoints';
import { PublicIp } from './PublicIp';
import { ResizeInfo } from './ResizeInfo';
import { Tags } from './Tags';


export class ClusterDetail {
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
    private 'parameter_group'?: ParameterGroup | undefined;
    private 'node_type_id': string | undefined;
    private 'security_group_id': string | undefined;
    private 'private_ip': Array<string> | undefined;
    private 'maintain_window': MaintainWindow | undefined;
    private 'resize_info'?: ResizeInfo | undefined;
    private 'failed_reasons'?: FailedReason | undefined;
    public elb?: ElbResp;
    public constructor(id?: any, name?: any, status?: any, version?: any, updated?: any, created?: any, port?: any, endpoints?: any, nodes?: any, tags?: any, userName?: any, numberOfNode?: any, recentEvent?: any, availabilityZone?: any, enterpriseProjectId?: any, nodeType?: any, vpcId?: any, subnetId?: any, publicIp?: any, publicEndpoints?: any, actionProgress?: any, subStatus?: any, taskStatus?: any, nodeTypeId?: any, securityGroupId?: any, privateIp?: any, maintainWindow?: any) { 
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
        this['node_type_id'] = nodeTypeId;
        this['security_group_id'] = securityGroupId;
        this['private_ip'] = privateIp;
        this['maintain_window'] = maintainWindow;
    }
    public withId(id: string): ClusterDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ClusterDetail {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ClusterDetail {
        this['version'] = version;
        return this;
    }
    public withUpdated(updated: string): ClusterDetail {
        this['updated'] = updated;
        return this;
    }
    public withCreated(created: string): ClusterDetail {
        this['created'] = created;
        return this;
    }
    public withPort(port: number): ClusterDetail {
        this['port'] = port;
        return this;
    }
    public withEndpoints(endpoints: Array<Endpoints>): ClusterDetail {
        this['endpoints'] = endpoints;
        return this;
    }
    public withNodes(nodes: Array<Nodes>): ClusterDetail {
        this['nodes'] = nodes;
        return this;
    }
    public withTags(tags: Array<Tags>): ClusterDetail {
        this['tags'] = tags;
        return this;
    }
    public withUserName(userName: string): ClusterDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withNumberOfNode(numberOfNode: number): ClusterDetail {
        this['number_of_node'] = numberOfNode;
        return this;
    }
    public set numberOfNode(numberOfNode: number | undefined) {
        this['number_of_node'] = numberOfNode;
    }
    public get numberOfNode() {
        return this['number_of_node'];
    }
    public withRecentEvent(recentEvent: number): ClusterDetail {
        this['recent_event'] = recentEvent;
        return this;
    }
    public set recentEvent(recentEvent: number | undefined) {
        this['recent_event'] = recentEvent;
    }
    public get recentEvent() {
        return this['recent_event'];
    }
    public withAvailabilityZone(availabilityZone: string): ClusterDetail {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withNodeType(nodeType: string): ClusterDetail {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withVpcId(vpcId: string): ClusterDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ClusterDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withPublicIp(publicIp: PublicIp): ClusterDetail {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withPublicEndpoints(publicEndpoints: Array<PublicEndpoints>): ClusterDetail {
        this['public_endpoints'] = publicEndpoints;
        return this;
    }
    public set publicEndpoints(publicEndpoints: Array<PublicEndpoints> | undefined) {
        this['public_endpoints'] = publicEndpoints;
    }
    public get publicEndpoints() {
        return this['public_endpoints'];
    }
    public withActionProgress(actionProgress: { [key: string]: string; }): ClusterDetail {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: { [key: string]: string; } | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress() {
        return this['action_progress'];
    }
    public withSubStatus(subStatus: string): ClusterDetail {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus() {
        return this['sub_status'];
    }
    public withTaskStatus(taskStatus: string): ClusterDetail {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus() {
        return this['task_status'];
    }
    public withParameterGroup(parameterGroup: ParameterGroup): ClusterDetail {
        this['parameter_group'] = parameterGroup;
        return this;
    }
    public set parameterGroup(parameterGroup: ParameterGroup | undefined) {
        this['parameter_group'] = parameterGroup;
    }
    public get parameterGroup() {
        return this['parameter_group'];
    }
    public withNodeTypeId(nodeTypeId: string): ClusterDetail {
        this['node_type_id'] = nodeTypeId;
        return this;
    }
    public set nodeTypeId(nodeTypeId: string | undefined) {
        this['node_type_id'] = nodeTypeId;
    }
    public get nodeTypeId() {
        return this['node_type_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ClusterDetail {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withPrivateIp(privateIp: Array<string>): ClusterDetail {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: Array<string> | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp() {
        return this['private_ip'];
    }
    public withMaintainWindow(maintainWindow: MaintainWindow): ClusterDetail {
        this['maintain_window'] = maintainWindow;
        return this;
    }
    public set maintainWindow(maintainWindow: MaintainWindow | undefined) {
        this['maintain_window'] = maintainWindow;
    }
    public get maintainWindow() {
        return this['maintain_window'];
    }
    public withResizeInfo(resizeInfo: ResizeInfo): ClusterDetail {
        this['resize_info'] = resizeInfo;
        return this;
    }
    public set resizeInfo(resizeInfo: ResizeInfo | undefined) {
        this['resize_info'] = resizeInfo;
    }
    public get resizeInfo() {
        return this['resize_info'];
    }
    public withFailedReasons(failedReasons: FailedReason): ClusterDetail {
        this['failed_reasons'] = failedReasons;
        return this;
    }
    public set failedReasons(failedReasons: FailedReason | undefined) {
        this['failed_reasons'] = failedReasons;
    }
    public get failedReasons() {
        return this['failed_reasons'];
    }
    public withElb(elb: ElbResp): ClusterDetail {
        this['elb'] = elb;
        return this;
    }
}