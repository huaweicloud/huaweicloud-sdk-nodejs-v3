

export class SaveTemplateParam {
    public description?: string;
    private 'mindmap_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): SaveTemplateParam {
        this['description'] = description;
        return this;
    }
    public withMindmapId(mindmapId: string): SaveTemplateParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withName(name: string): SaveTemplateParam {
        this['name'] = name;
        return this;
    }
}