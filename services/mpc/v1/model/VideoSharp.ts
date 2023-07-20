

export class VideoSharp {
    public name?: string;
    private 'execution_order'?: number;
    public amount?: string;
    public constructor() { 
    }
    public withName(name: string): VideoSharp {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoSharp {
        this['execution_order'] = executionOrder;
        return this;
    }
    public set executionOrder(executionOrder: number  | undefined) {
        this['execution_order'] = executionOrder;
    }
    public get executionOrder(): number | undefined {
        return this['execution_order'];
    }
    public withAmount(amount: string): VideoSharp {
        this['amount'] = amount;
        return this;
    }
}