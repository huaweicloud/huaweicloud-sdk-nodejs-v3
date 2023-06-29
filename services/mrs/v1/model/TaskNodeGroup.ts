import { AutoScalingPolicy } from './AutoScalingPolicy';


export class TaskNodeGroup {
    private 'node_num': number | undefined;
    private 'node_size': string | undefined;
    private 'data_volume_type': TaskNodeGroupDataVolumeTypeEnum | undefined;
    private 'data_volume_count': number | undefined;
    private 'data_volume_size': number | undefined;
    private 'auto_scaling_policy'?: AutoScalingPolicy | undefined;
    public constructor(nodeNum?: any, nodeSize?: any, dataVolumeType?: any, dataVolumeCount?: any, dataVolumeSize?: any) { 
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
        this['data_volume_type'] = dataVolumeType;
        this['data_volume_count'] = dataVolumeCount;
        this['data_volume_size'] = dataVolumeSize;
    }
    public withNodeNum(nodeNum: number): TaskNodeGroup {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): TaskNodeGroup {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize() {
        return this['node_size'];
    }
    public withDataVolumeType(dataVolumeType: TaskNodeGroupDataVolumeTypeEnum): TaskNodeGroup {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: TaskNodeGroupDataVolumeTypeEnum | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType() {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): TaskNodeGroup {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount() {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): TaskNodeGroup {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize() {
        return this['data_volume_size'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): TaskNodeGroup {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy() {
        return this['auto_scaling_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskNodeGroupDataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
