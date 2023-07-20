

export class VideoDenoise {
    public name?: string;
    private 'execution_order'?: number;
    public constructor() { 
    }
    public withName(name: string): VideoDenoise {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoDenoise {
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