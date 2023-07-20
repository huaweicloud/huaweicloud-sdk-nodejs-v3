import { TopicAssignment } from './TopicAssignment';


export class PartitionReassignEntity {
    public topic?: string;
    public brokers?: Array<number>;
    private 'replication_factor'?: number;
    public assignment?: Array<TopicAssignment>;
    public constructor(topic?: string) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): PartitionReassignEntity {
        this['topic'] = topic;
        return this;
    }
    public withBrokers(brokers: Array<number>): PartitionReassignEntity {
        this['brokers'] = brokers;
        return this;
    }
    public withReplicationFactor(replicationFactor: number): PartitionReassignEntity {
        this['replication_factor'] = replicationFactor;
        return this;
    }
    public set replicationFactor(replicationFactor: number  | undefined) {
        this['replication_factor'] = replicationFactor;
    }
    public get replicationFactor(): number | undefined {
        return this['replication_factor'];
    }
    public withAssignment(assignment: Array<TopicAssignment>): PartitionReassignEntity {
        this['assignment'] = assignment;
        return this;
    }
}