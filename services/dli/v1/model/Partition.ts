import { PartitionInfo } from './PartitionInfo';


export class Partition {
    private 'total_count'?: number;
    private 'partition_infos'?: Array<PartitionInfo>;
    public constructor(totalCount?: number, partitionInfos?: Array<PartitionInfo>) { 
        this['total_count'] = totalCount;
        this['partition_infos'] = partitionInfos;
    }
    public withTotalCount(totalCount: number): Partition {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPartitionInfos(partitionInfos: Array<PartitionInfo>): Partition {
        this['partition_infos'] = partitionInfos;
        return this;
    }
    public set partitionInfos(partitionInfos: Array<PartitionInfo>  | undefined) {
        this['partition_infos'] = partitionInfos;
    }
    public get partitionInfos(): Array<PartitionInfo> | undefined {
        return this['partition_infos'];
    }
}