

export class Resize {
    private 'node_type'?: string;
    private 'number_of_node'?: number;
    public constructor(nodeType?: string, numberOfNode?: number) { 
        this['node_type'] = nodeType;
        this['number_of_node'] = numberOfNode;
    }
    public withNodeType(nodeType: string): Resize {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNumberOfNode(numberOfNode: number): Resize {
        this['number_of_node'] = numberOfNode;
        return this;
    }
    public set numberOfNode(numberOfNode: number  | undefined) {
        this['number_of_node'] = numberOfNode;
    }
    public get numberOfNode(): number | undefined {
        return this['number_of_node'];
    }
}