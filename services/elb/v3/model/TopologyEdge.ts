

export class TopologyEdge {
    public source?: string;
    public target?: string;
    private 'source_type'?: string;
    private 'target_type'?: string;
    public label?: string;
    private 'label_id'?: string;
    public constructor(source?: string, target?: string, sourceType?: string, targetType?: string) { 
        this['source'] = source;
        this['target'] = target;
        this['source_type'] = sourceType;
        this['target_type'] = targetType;
    }
    public withSource(source: string): TopologyEdge {
        this['source'] = source;
        return this;
    }
    public withTarget(target: string): TopologyEdge {
        this['target'] = target;
        return this;
    }
    public withSourceType(sourceType: string): TopologyEdge {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withTargetType(targetType: string): TopologyEdge {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withLabel(label: string): TopologyEdge {
        this['label'] = label;
        return this;
    }
    public withLabelId(labelId: string): TopologyEdge {
        this['label_id'] = labelId;
        return this;
    }
    public set labelId(labelId: string  | undefined) {
        this['label_id'] = labelId;
    }
    public get labelId(): string | undefined {
        return this['label_id'];
    }
}