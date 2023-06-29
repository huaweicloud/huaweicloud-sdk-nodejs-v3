import { AutoScalingPolicy } from './AutoScalingPolicy';
import { ChargeInfo } from './ChargeInfo';
import { Volume } from './Volume';


export class NodeGroupV2 {
    private 'group_name': string | undefined;
    private 'node_num': number | undefined;
    private 'node_size': string | undefined;
    private 'root_volume'?: Volume | undefined;
    private 'data_volume'?: Volume | undefined;
    private 'data_volume_count'?: number | undefined;
    private 'charge_info'?: ChargeInfo | undefined;
    private 'auto_scaling_policy'?: AutoScalingPolicy | undefined;
    private 'assigned_roles'?: Array<string> | undefined;
    public constructor(groupName?: any, nodeNum?: any, nodeSize?: any) { 
        this['group_name'] = groupName;
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
    }
    public withGroupName(groupName: string): NodeGroupV2 {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withNodeNum(nodeNum: number): NodeGroupV2 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): NodeGroupV2 {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize() {
        return this['node_size'];
    }
    public withRootVolume(rootVolume: Volume): NodeGroupV2 {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume() {
        return this['root_volume'];
    }
    public withDataVolume(dataVolume: Volume): NodeGroupV2 {
        this['data_volume'] = dataVolume;
        return this;
    }
    public set dataVolume(dataVolume: Volume | undefined) {
        this['data_volume'] = dataVolume;
    }
    public get dataVolume() {
        return this['data_volume'];
    }
    public withDataVolumeCount(dataVolumeCount: number): NodeGroupV2 {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount() {
        return this['data_volume_count'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): NodeGroupV2 {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo() {
        return this['charge_info'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): NodeGroupV2 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy() {
        return this['auto_scaling_policy'];
    }
    public withAssignedRoles(assignedRoles: Array<string>): NodeGroupV2 {
        this['assigned_roles'] = assignedRoles;
        return this;
    }
    public set assignedRoles(assignedRoles: Array<string> | undefined) {
        this['assigned_roles'] = assignedRoles;
    }
    public get assignedRoles() {
        return this['assigned_roles'];
    }
}