import { NetAddress } from './NetAddress';


export class ActionKafkaForwarding {
    private 'region_name'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'kafka_addresses'?: Array<NetAddress> | undefined;
    private 'kafka_topic'?: string | undefined;
    private 'kafka_username'?: string | undefined;
    private 'kafka_password'?: string | undefined;
    private 'kafka_mechanism'?: string | undefined;
    public constructor() { 
    }
    public withRegionName(regionName: string): ActionKafkaForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionKafkaForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withKafkaAddresses(kafkaAddresses: Array<NetAddress>): ActionKafkaForwarding {
        this['kafka_addresses'] = kafkaAddresses;
        return this;
    }
    public set kafkaAddresses(kafkaAddresses: Array<NetAddress> | undefined) {
        this['kafka_addresses'] = kafkaAddresses;
    }
    public get kafkaAddresses() {
        return this['kafka_addresses'];
    }
    public withKafkaTopic(kafkaTopic: string): ActionKafkaForwarding {
        this['kafka_topic'] = kafkaTopic;
        return this;
    }
    public set kafkaTopic(kafkaTopic: string | undefined) {
        this['kafka_topic'] = kafkaTopic;
    }
    public get kafkaTopic() {
        return this['kafka_topic'];
    }
    public withKafkaUsername(kafkaUsername: string): ActionKafkaForwarding {
        this['kafka_username'] = kafkaUsername;
        return this;
    }
    public set kafkaUsername(kafkaUsername: string | undefined) {
        this['kafka_username'] = kafkaUsername;
    }
    public get kafkaUsername() {
        return this['kafka_username'];
    }
    public withKafkaPassword(kafkaPassword: string): ActionKafkaForwarding {
        this['kafka_password'] = kafkaPassword;
        return this;
    }
    public set kafkaPassword(kafkaPassword: string | undefined) {
        this['kafka_password'] = kafkaPassword;
    }
    public get kafkaPassword() {
        return this['kafka_password'];
    }
    public withKafkaMechanism(kafkaMechanism: string): ActionKafkaForwarding {
        this['kafka_mechanism'] = kafkaMechanism;
        return this;
    }
    public set kafkaMechanism(kafkaMechanism: string | undefined) {
        this['kafka_mechanism'] = kafkaMechanism;
    }
    public get kafkaMechanism() {
        return this['kafka_mechanism'];
    }
}