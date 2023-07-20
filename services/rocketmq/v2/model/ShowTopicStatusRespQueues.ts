

export class ShowTopicStatusRespQueues {
    public id?: number;
    private 'min_offset'?: number;
    private 'max_offset'?: number;
    private 'last_message_time'?: number;
    public constructor() { 
    }
    public withId(id: number): ShowTopicStatusRespQueues {
        this['id'] = id;
        return this;
    }
    public withMinOffset(minOffset: number): ShowTopicStatusRespQueues {
        this['min_offset'] = minOffset;
        return this;
    }
    public set minOffset(minOffset: number  | undefined) {
        this['min_offset'] = minOffset;
    }
    public get minOffset(): number | undefined {
        return this['min_offset'];
    }
    public withMaxOffset(maxOffset: number): ShowTopicStatusRespQueues {
        this['max_offset'] = maxOffset;
        return this;
    }
    public set maxOffset(maxOffset: number  | undefined) {
        this['max_offset'] = maxOffset;
    }
    public get maxOffset(): number | undefined {
        return this['max_offset'];
    }
    public withLastMessageTime(lastMessageTime: number): ShowTopicStatusRespQueues {
        this['last_message_time'] = lastMessageTime;
        return this;
    }
    public set lastMessageTime(lastMessageTime: number  | undefined) {
        this['last_message_time'] = lastMessageTime;
    }
    public get lastMessageTime(): number | undefined {
        return this['last_message_time'];
    }
}