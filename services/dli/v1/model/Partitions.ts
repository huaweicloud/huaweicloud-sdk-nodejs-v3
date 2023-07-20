import { PartitionInfos } from './PartitionInfos';


export class Partitions {
    private 'total_count'?: number;
    private 'partition_infos'?: Array<PartitionInfos>;
    public constructor(totalCount?: number, partitionInfos?: Array<PartitionInfos>) { 
        this['total_count'] = totalCount;
        this['partition_infos'] = partitionInfos;
    }
    public withTotalCount(totalCount: number): Partitions {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPartitionInfos(partitionInfos: Array<PartitionInfos>): Partitions {
        this['partition_infos'] = partitionInfos;
        return this;
    }
    public set partitionInfos(partitionInfos: Array<PartitionInfos>  | undefined) {
        this['partition_infos'] = partitionInfos;
    }
    public get partitionInfos(): Array<PartitionInfos> | undefined {
        return this['partition_infos'];
    }
}