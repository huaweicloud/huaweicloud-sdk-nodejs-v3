import { MigrationRabbitBindingMetadata } from './MigrationRabbitBindingMetadata';
import { MigrationRabbitExchangeMetadata } from './MigrationRabbitExchangeMetadata';
import { MigrationRabbitQueueMetadata } from './MigrationRabbitQueueMetadata';
import { MigrationRabbitVhostMetadata } from './MigrationRabbitVhostMetadata';
import { MigrationRocketMqSubscriptionGroup } from './MigrationRocketMqSubscriptionGroup';
import { MigrationRocketMqTopicConfig } from './MigrationRocketMqTopicConfig';


export class CreateRocketMqMigrationTaskReq {
    public topicConfigTable?: { [key: string]: MigrationRocketMqTopicConfig; };
    public subscriptionGroupTable?: { [key: string]: MigrationRocketMqSubscriptionGroup; };
    public vhosts?: Array<MigrationRabbitVhostMetadata>;
    public queues?: Array<MigrationRabbitQueueMetadata>;
    public exchanges?: Array<MigrationRabbitExchangeMetadata>;
    public bindings?: Array<MigrationRabbitBindingMetadata>;
    public constructor() { 
    }
    public withTopicConfigTable(topicConfigTable: { [key: string]: MigrationRocketMqTopicConfig; }): CreateRocketMqMigrationTaskReq {
        this['topicConfigTable'] = topicConfigTable;
        return this;
    }
    public withSubscriptionGroupTable(subscriptionGroupTable: { [key: string]: MigrationRocketMqSubscriptionGroup; }): CreateRocketMqMigrationTaskReq {
        this['subscriptionGroupTable'] = subscriptionGroupTable;
        return this;
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