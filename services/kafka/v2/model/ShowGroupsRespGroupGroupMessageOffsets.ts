

export class ShowGroupsRespGroupGroupMessageOffsets {
    public partition?: number;
    public lag?: number;
    public topic?: string;
    private 'message_current_offset'?: number | undefined;
    private 'message_log_end_offset'?: number | undefined;
    public constructor() { 
    }
    public withPartition(partition: number): ShowGroupsRespGroupGroupMessageOffsets {
        this['partition'] = partition;
        return this;
    }
    public withLag(lag: number): ShowGroupsRespGroupGroupMessageOffsets {
        this['lag'] = lag;
        return this;
    }
    public withTopic(topic: string): ShowGroupsRespGroupGroupMessageOffsets {
        this['topic'] = topic;
        return this;
    }
    public withMessageCurrentOffset(messageCurrentOffset: number): ShowGroupsRespGroupGroupMessageOffsets {
        this['message_current_offset'] = messageCurrentOffset;
        return this;
    }
    public set messageCurrentOffset(messageCurrentOffset: number | undefined) {
        this['message_current_offset'] = messageCurrentOffset;
    }
    public get messageCurrentOffset() {
        return this['message_current_offset'];
    }
    public withMessageLogEndOffset(messageLogEndOffset: number): ShowGroupsRespGroupGroupMessageOffsets {
        this['message_log_end_offset'] = messageLogEndOffset;
        return this;
    }
    public set messageLogEndOffset(messageLogEndOffset: number | undefined) {
        this['message_log_end_offset'] = messageLogEndOffset;
    }
    public get messageLogEndOffset() {
        return this['message_log_end_offset'];
    }
}