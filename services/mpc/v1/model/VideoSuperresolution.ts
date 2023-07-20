

export class VideoSuperresolution {
    public name?: string;
    private 'execution_order'?: number;
    public scale?: string;
    public constructor() { 
    }
    public withName(name: string): VideoSuperresolution {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoSuperresolution {
        this['execution_order'] = executionOrder;
        return this;
    }
    public set executionOrder(executionOrder: number  | undefined) {
        this['execution_order'] = executionOrder;
    }
    public get executionOrder(): number | undefined {
        return this['execution_order'];
    }
    public withScale(scale: string): VideoSuperresolution {
        this['scale'] = scale;
        return this;
    }
}