

export class ShowInstanceMessagesRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public asc?: boolean;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: string;
    public offset?: string;
    public download?: boolean;
    private 'message_offset'?: string;
    public partition?: string;
    public keyword?: string;
    public key?: string;
    public include?: string;
    public exclude?: string;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ShowInstanceMessagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowInstanceMessagesRequest {
        this['topic'] = topic;
        return this;
    }
    public withAsc(asc: boolean): ShowInstanceMessagesRequest {
        this['asc'] = asc;
        return this;
    }
    public withStartTime(startTime: string): ShowInstanceMessagesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowInstanceMessagesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: string): ShowInstanceMessagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowInstanceMessagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withDownload(download: boolean): ShowInstanceMessagesRequest {
        this['download'] = download;
        return this;
    }
    public withMessageOffset(messageOffset: string): ShowInstanceMessagesRequest {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: string  | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset(): string | undefined {
        return this['message_offset'];
    }
    public withPartition(partition: string): ShowInstanceMessagesRequest {
        this['partition'] = partition;
        return this;
    }
    public withKeyword(keyword: string): ShowInstanceMessagesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withKey(key: string): ShowInstanceMessagesRequest {
        this['key'] = key;
        return this;
    }
    public withInclude(include: string): ShowInstanceMessagesRequest {
        this['include'] = include;
        return this;
    }
    public withExclude(exclude: string): ShowInstanceMessagesRequest {
        this['exclude'] = exclude;
        return this;
    }
}