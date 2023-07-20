import { AutoScalingPolicy } from './AutoScalingPolicy';
import { ChargeInfo } from './ChargeInfo';
import { Volume } from './Volume';


export class NodeGroupV2 {
    private 'group_name'?: string;
    private 'node_num'?: number;
    private 'node_size'?: string;
    private 'root_volume'?: Volume;
    private 'data_volume'?: Volume;
    private 'data_volume_count'?: number;
    private 'charge_info'?: ChargeInfo;
    private 'auto_scaling_policy'?: AutoScalingPolicy;
    private 'assigned_roles'?: Array<string>;
    public constructor(groupName?: string, nodeNum?: number, nodeSize?: string) { 
        this['group_name'] = groupName;
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
    }
    public withGroupName(groupName: string): NodeGroupV2 {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withNodeNum(nodeNum: number): NodeGroupV2 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): NodeGroupV2 {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string  | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize(): string | undefined {
        return this['node_size'];
    }
    public withRootVolume(rootVolume: Volume): NodeGroupV2 {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): Volume | undefined {
        return this['root_volume'];
    }
    public withDataVolume(dataVolume: Volume): NodeGroupV2 {
        this['data_volume'] = dataVolume;
        return this;
    }
    public set dataVolume(dataVolume: Volume  | undefined) {
        this['data_volume'] = dataVolume;
    }
    public get dataVolume(): Volume | undefined {
        return this['data_volume'];
    }
    public withDataVolumeCount(dataVolumeCount: number): NodeGroupV2 {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number  | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount(): number | undefined {
        return this['data_volume_count'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): NodeGroupV2 {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): NodeGroupV2 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy  | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy(): AutoScalingPolicy | undefined {
        return this['auto_scaling_policy'];
    }
    public withAssignedRoles(assignedRoles: Array<string>): NodeGroupV2 {
        this['assigned_roles'] = assignedRoles;
        return this;
    }
    public set assignedRoles(assignedRoles: Array<string>  | undefined) {
        this['assigned_roles'] = assignedRoles;
    }
    public get assignedRoles(): Array<string> | undefined {
        return this['assigned_roles'];
    }
}