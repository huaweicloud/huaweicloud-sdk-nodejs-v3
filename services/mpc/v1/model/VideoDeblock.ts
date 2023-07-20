

export class VideoDeblock {
    public name?: string;
    private 'execution_order'?: number;
    public constructor() { 
    }
    public withName(name: string): VideoDeblock {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoDeblock {
        this['execution_order'] = executionOrder;
        return this;
    }
    public set executionOrder(executionOrder: number  | undefined) {
        this['execution_order'] = executionOrder;
    }
    public get executionOrder(): number | undefined {
        return this['execution_order'];
    }
}