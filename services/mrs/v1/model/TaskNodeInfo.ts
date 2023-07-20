

export class TaskNodeInfo {
    private 'node_size'?: string;
    private 'data_volume_type'?: TaskNodeInfoDataVolumeTypeEnum | string;
    private 'data_volume_count'?: number;
    private 'data_volume_size'?: number;
    public constructor(nodeSize?: string, dataVolumeType?: string, dataVolumeCount?: number, dataVolumeSize?: number) { 
        this['node_size'] = nodeSize;
        this['data_volume_type'] = dataVolumeType;
        this['data_volume_count'] = dataVolumeCount;
        this['data_volume_size'] = dataVolumeSize;
    }
    public withNodeSize(nodeSize: string): TaskNodeInfo {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string  | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize(): string | undefined {
        return this['node_size'];
    }
    public withDataVolumeType(dataVolumeType: TaskNodeInfoDataVolumeTypeEnum | string): TaskNodeInfo {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: TaskNodeInfoDataVolumeTypeEnum | string  | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType(): TaskNodeInfoDataVolumeTypeEnum | string | undefined {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): TaskNodeInfo {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number  | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount(): number | undefined {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): TaskNodeInfo {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
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
