

export class GroupMessageOffsetsDetailEntity {
    public partition?: string;
    private 'message_current_offset'?: string;
    private 'message_log_start_offset'?: number;
    private 'message_log_end_offset'?: number;
    private 'consumer_id'?: string;
    public host?: string;
    private 'client_id'?: string;
    public constructor() { 
    }
    public withPartition(partition: string): GroupMessageOffsetsDetailEntity {
        this['partition'] = partition;
        return this;
    }
    public withMessageCurrentOffset(messageCurrentOffset: string): GroupMessageOffsetsDetailEntity {
        this['message_current_offset'] = messageCurrentOffset;
        return this;
    }
    public set messageCurrentOffset(messageCurrentOffset: string  | undefined) {
        this['message_current_offset'] = messageCurrentOffset;
    }
    public get messageCurrentOffset(): string | undefined {
        return this['message_current_offset'];
    }
    public withMessageLogStartOffset(messageLogStartOffset: number): GroupMessageOffsetsDetailEntity {
        this['message_log_start_offset'] = messageLogStartOffset;
        return this;
    }
    public set messageLogStartOffset(messageLogStartOffset: number  | undefined) {
        this['message_log_start_offset'] = messageLogStartOffset;
    }
    public get messageLogStartOffset(): number | undefined {
        return this['message_log_start_offset'];
    }
    public withMessageLogEndOffset(messageLogEndOffset: number): GroupMessageOffsetsDetailEntity {
        this['message_log_end_offset'] = messageLogEndOffset;
        return this;
    }
    public set messageLogEndOffset(messageLogEndOffset: number  | undefined) {
        this['message_log_end_offset'] = messageLogEndOffset;
    }
    public get messageLogEndOffset(): number | undefined {
        return this['message_log_end_offset'];
    }
    public withConsumerId(consumerId: string): GroupMessageOffsetsDetailEntity {
        this['consumer_id'] = consumerId;
        return this;
    }
    public set consumerId(consumerId: string  | undefined) {
        this['consumer_id'] = consumerId;
    }
    public get consumerId(): string | undefined {
        return this['consumer_id'];
    }
    public withHost(host: string): GroupMessageOffsetsDetailEntity {
        this['host'] = host;
        return this;
    }
    public withClientId(clientId: string): GroupMessageOffsetsDetailEntity {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}