

export class ShowStructTemplateclusterInfo {
    private 'cluster_name'?: string;
    private 'kafka_bootstrap_servers'?: string;
    private 'kafka_ssl_enable'?: boolean;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ShowStructTemplateclusterInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withKafkaBootstrapServers(kafkaBootstrapServers: string): ShowStructTemplateclusterInfo {
        this['kafka_bootstrap_servers'] = kafkaBootstrapServers;
        return this;
    }
    public set kafkaBootstrapServers(kafkaBootstrapServers: string  | undefined) {
        this['kafka_bootstrap_servers'] = kafkaBootstrapServers;
    }
    public get kafkaBootstrapServers(): string | undefined {
        return this['kafka_bootstrap_servers'];
    }
    public withKafkaSslEnable(kafkaSslEnable: boolean): ShowStructTemplateclusterInfo {
        this['kafka_ssl_enable'] = kafkaSslEnable;
        return this;
    }
    public set kafkaSslEnable(kafkaSslEnable: boolean  | undefined) {
        this['kafka_ssl_enable'] = kafkaSslEnable;
    }
    public get kafkaSslEnable(): boolean | undefined {
        return this['kafka_ssl_enable'];
    }
}