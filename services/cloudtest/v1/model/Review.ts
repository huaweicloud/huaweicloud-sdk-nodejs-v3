

export class Review {
    public charger?: string;
    private 'create_time'?: string;
    public creator?: string;
    public deleted?: string;
    public description?: string;
    public id?: string;
    private 'mindmap_id'?: string;
    private 'node_id'?: string;
    private 'node_value'?: string;
    public status?: string;
    public type?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withCharger(charger: string): Review {
        this['charger'] = charger;
        return this;
    }
    public withCreateTime(createTime: string): Review {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): Review {
        this['creator'] = creator;
        return this;
    }
    public withDeleted(deleted: string): Review {
        this['deleted'] = deleted;
        return this;
    }
    public withDescription(description: string): Review {
        this['description'] = description;
        return this;
    }
    public withId(id: string): Review {
        this['id'] = id;
        return this;
    }
    public withMindmapId(mindmapId: string): Review {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withNodeId(nodeId: string): Review {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeValue(nodeValue: string): Review {
        this['node_value'] = nodeValue;
        return this;
    }
    public set nodeValue(nodeValue: string  | undefined) {
        this['node_value'] = nodeValue;
    }
    public get nodeValue(): string | undefined {
        return this['node_value'];
    }
    public withStatus(status: string): Review {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Review {
        this['type'] = type;
        return this;
    }
    public withUpdateTime(updateTime: string): Review {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}