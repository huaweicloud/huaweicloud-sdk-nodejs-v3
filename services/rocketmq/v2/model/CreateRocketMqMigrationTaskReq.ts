import { MigrationRabbitBindingMetadata } from './MigrationRabbitBindingMetadata';
import { MigrationRabbitExchangeMetadata } from './MigrationRabbitExchangeMetadata';
import { MigrationRabbitQueueMetadata } from './MigrationRabbitQueueMetadata';
import { MigrationRabbitVhostMetadata } from './MigrationRabbitVhostMetadata';
import { MigrationRocketMqSubscriptionGroup } from './MigrationRocketMqSubscriptionGroup';
import { MigrationRocketMqTopicConfig } from './MigrationRocketMqTopicConfig';


export class CreateRocketMqMigrationTaskReq {
    private 'topic_config_table'?: { [key: string]: MigrationRocketMqTopicConfig; };
    private 'subscription_group_table'?: { [key: string]: MigrationRocketMqSubscriptionGroup; };
    public vhosts?: Array<MigrationRabbitVhostMetadata>;
    public queues?: Array<MigrationRabbitQueueMetadata>;
    public exchanges?: Array<MigrationRabbitExchangeMetadata>;
    public bindings?: Array<MigrationRabbitBindingMetadata>;
    public constructor() { 
    }
    public withTopicConfigTable(topicConfigTable: { [key: string]: MigrationRocketMqTopicConfig; }): CreateRocketMqMigrationTaskReq {
        this['topic_config_table'] = topicConfigTable;
        return this;
    }
    public set topicConfigTable(topicConfigTable: { [key: string]: MigrationRocketMqTopicConfig; }  | undefined) {
        this['topic_config_table'] = topicConfigTable;
    }
    public get topicConfigTable(): { [key: string]: MigrationRocketMqTopicConfig; } | undefined {
        return this['topic_config_table'];
    }
    public withSubscriptionGroupTable(subscriptionGroupTable: { [key: string]: MigrationRocketMqSubscriptionGroup; }): CreateRocketMqMigrationTaskReq {
        this['subscription_group_table'] = subscriptionGroupTable;
        return this;
    }
    public set subscriptionGroupTable(subscriptionGroupTable: { [key: string]: MigrationRocketMqSubscriptionGroup; }  | undefined) {
        this['subscription_group_table'] = subscriptionGroupTable;
    }
    public get subscriptionGroupTable(): { [key: string]: MigrationRocketMqSubscriptionGroup; } | undefined {
        return this['subscription_group_table'];
    }
    public withVhosts(vhosts: Array<MigrationRabbitVhostMetadata>): CreateRocketMqMigrationTaskReq {
        this['vhosts'] = vhosts;
        return this;
    }
    public withQueues(queues: Array<MigrationRabbitQueueMetadata>): CreateRocketMqMigrationTaskReq {
        this['queues'] = queues;
        return this;
    }
    public withExchanges(exchanges: Array<MigrationRabbitExchangeMetadata>): CreateRocketMqMigrationTaskReq {
        this['exchanges'] = exchanges;
        return this;
    }
    public withBindings(bindings: Array<MigrationRabbitBindingMetadata>): CreateRocketMqMigrationTaskReq {
        this['bindings'] = bindings;
        return this;
    }
}