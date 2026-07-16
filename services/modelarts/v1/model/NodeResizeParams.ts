

export class NodeResizeParams {
    public nodePool?: string;
    public flavor?: string;
    public creatingStep?: object;
    public constructor() { 
    }
    public withNodePool(nodePool: string): NodeResizeParams {
        this['nodePool'] = nodePool;
        return this;
    }
    public withFlavor(flavor: string): NodeResizeParams {
        this['flavor'] = flavor;
        return this;
    }
    public withCreatingStep(creatingStep: object): NodeResizeParams {
        this['creatingStep'] = creatingStep;
        return this;
    }
}