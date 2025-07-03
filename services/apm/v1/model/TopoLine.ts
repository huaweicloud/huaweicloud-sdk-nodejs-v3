

export class TopoLine {
    private 'from_node'?: string;
    private 'to_node'?: string;
    public direction?: string;
    public collector?: string;
    private 'target_env_id'?: number;
    public hints?: { [key: string]: string; };
    private 'filter_value'?: string;
    public constructor() { 
    }
    public withFromNode(fromNode: string): TopoLine {
        this['from_node'] = fromNode;
        return this;
    }
    public set fromNode(fromNode: string  | undefined) {
        this['from_node'] = fromNode;
    }
    public get fromNode(): string | undefined {
        return this['from_node'];
    }
    public withToNode(toNode: string): TopoLine {
        this['to_node'] = toNode;
        return this;
    }
    public set toNode(toNode: string  | undefined) {
        this['to_node'] = toNode;
    }
    public get toNode(): string | undefined {
        return this['to_node'];
    }
    public withDirection(direction: string): TopoLine {
        this['direction'] = direction;
        return this;
    }
    public withCollector(collector: string): TopoLine {
        this['collector'] = collector;
        return this;
    }
    public withTargetEnvId(targetEnvId: number): TopoLine {
        this['target_env_id'] = targetEnvId;
        return this;
    }
    public set targetEnvId(targetEnvId: number  | undefined) {
        this['target_env_id'] = targetEnvId;
    }
    public get targetEnvId(): number | undefined {
        return this['target_env_id'];
    }
    public withHints(hints: { [key: string]: string; }): TopoLine {
        this['hints'] = hints;
        return this;
    }
    public withFilterValue(filterValue: string): TopoLine {
        this['filter_value'] = filterValue;
        return this;
    }
    public set filterValue(filterValue: string  | undefined) {
        this['filter_value'] = filterValue;
    }
    public get filterValue(): string | undefined {
        return this['filter_value'];
    }
}