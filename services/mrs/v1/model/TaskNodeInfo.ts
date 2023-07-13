

export class TaskNodeInfo {
    private 'node_size': string | undefined;
    private 'data_volume_type': TaskNodeInfoDataVolumeTypeEnum | undefined;
    private 'data_volume_count': number | undefined;
    private 'data_volume_size': number | undefined;
    public constructor(nodeSize?: any, dataVolumeType?: any, dataVolumeCount?: any, dataVolumeSize?: any) { 
        this['node_size'] = nodeSize;
        this['data_volume_type'] = dataVolumeType;
        this['data_volume_count'] = dataVolumeCount;
        this['data_volume_size'] = dataVolumeSize;
    }
    public withNodeSize(nodeSize: string): TaskNodeInfo {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize() {
        return this['node_size'];
    }
    public withDataVolumeType(dataVolumeType: TaskNodeInfoDataVolumeTypeEnum): TaskNodeInfo {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: TaskNodeInfoDataVolumeTypeEnum | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType() {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): TaskNodeInfo {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount() {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): TaskNodeInfo {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize() {
        return this['data_volume_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskNodeInfoDataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
