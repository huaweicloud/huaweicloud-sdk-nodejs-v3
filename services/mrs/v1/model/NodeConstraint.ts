

export class NodeConstraint {
    public other?: { [key: string]: object; };
    private 'min_node_num'?: number;
    private 'max_node_num'?: number;
    private 'min_core_num'?: { [key: string]: number; };
    private 'min_mem_size'?: { [key: string]: number; };
    private 'min_disk_size'?: number;
    private 'max_node_group_num'?: number;
    private 'min_data_volume_total_size'?: { [key: string]: number; };
    private 'disk_type_constraint'?: { [key: string]: string; };
    private 'min_root_disk_size'?: number;
    public constructor() { 
    }
    public withOther(other: { [key: string]: object; }): NodeConstraint {
        this['other'] = other;
        return this;
    }
    public withMinNodeNum(minNodeNum: number): NodeConstraint {
        this['min_node_num'] = minNodeNum;
        return this;
    }
    public set minNodeNum(minNodeNum: number  | undefined) {
        this['min_node_num'] = minNodeNum;
    }
    public get minNodeNum(): number | undefined {
        return this['min_node_num'];
    }
    public withMaxNodeNum(maxNodeNum: number): NodeConstraint {
        this['max_node_num'] = maxNodeNum;
        return this;
    }
    public set maxNodeNum(maxNodeNum: number  | undefined) {
        this['max_node_num'] = maxNodeNum;
    }
    public get maxNodeNum(): number | undefined {
        return this['max_node_num'];
    }
    public withMinCoreNum(minCoreNum: { [key: string]: number; }): NodeConstraint {
        this['min_core_num'] = minCoreNum;
        return this;
    }
    public set minCoreNum(minCoreNum: { [key: string]: number; }  | undefined) {
        this['min_core_num'] = minCoreNum;
    }
    public get minCoreNum(): { [key: string]: number; } | undefined {
        return this['min_core_num'];
    }
    public withMinMemSize(minMemSize: { [key: string]: number; }): NodeConstraint {
        this['min_mem_size'] = minMemSize;
        return this;
    }
    public set minMemSize(minMemSize: { [key: string]: number; }  | undefined) {
        this['min_mem_size'] = minMemSize;
    }
    public get minMemSize(): { [key: string]: number; } | undefined {
        return this['min_mem_size'];
    }
    public withMinDiskSize(minDiskSize: number): NodeConstraint {
        this['min_disk_size'] = minDiskSize;
        return this;
    }
    public set minDiskSize(minDiskSize: number  | undefined) {
        this['min_disk_size'] = minDiskSize;
    }
    public get minDiskSize(): number | undefined {
        return this['min_disk_size'];
    }
    public withMaxNodeGroupNum(maxNodeGroupNum: number): NodeConstraint {
        this['max_node_group_num'] = maxNodeGroupNum;
        return this;
    }
    public set maxNodeGroupNum(maxNodeGroupNum: number  | undefined) {
        this['max_node_group_num'] = maxNodeGroupNum;
    }
    public get maxNodeGroupNum(): number | undefined {
        return this['max_node_group_num'];
    }
    public withMinDataVolumeTotalSize(minDataVolumeTotalSize: { [key: string]: number; }): NodeConstraint {
        this['min_data_volume_total_size'] = minDataVolumeTotalSize;
        return this;
    }
    public set minDataVolumeTotalSize(minDataVolumeTotalSize: { [key: string]: number; }  | undefined) {
        this['min_data_volume_total_size'] = minDataVolumeTotalSize;
    }
    public get minDataVolumeTotalSize(): { [key: string]: number; } | undefined {
        return this['min_data_volume_total_size'];
    }
    public withDiskTypeConstraint(diskTypeConstraint: { [key: string]: string; }): NodeConstraint {
        this['disk_type_constraint'] = diskTypeConstraint;
        return this;
    }
    public set diskTypeConstraint(diskTypeConstraint: { [key: string]: string; }  | undefined) {
        this['disk_type_constraint'] = diskTypeConstraint;
    }
    public get diskTypeConstraint(): { [key: string]: string; } | undefined {
        return this['disk_type_constraint'];
    }
    public withMinRootDiskSize(minRootDiskSize: number): NodeConstraint {
        this['min_root_disk_size'] = minRootDiskSize;
        return this;
    }
    public set minRootDiskSize(minRootDiskSize: number  | undefined) {
        this['min_root_disk_size'] = minRootDiskSize;
    }
    public get minRootDiskSize(): number | undefined {
        return this['min_root_disk_size'];
    }
}