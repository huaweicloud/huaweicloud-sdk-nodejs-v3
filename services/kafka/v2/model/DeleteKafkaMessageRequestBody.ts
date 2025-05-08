import { PartitionOffsetEntity } from './PartitionOffsetEntity';


export class DeleteKafkaMessageRequestBody {
    public partitions?: Array<PartitionOffsetEntity>;
    public constructor() { 
    }
    public withPartitions(partitions: Array<PartitionOffsetEntity>): DeleteKafkaMessageRequestBody {
        this['partitions'] = partitions;
        return this;
    }
}