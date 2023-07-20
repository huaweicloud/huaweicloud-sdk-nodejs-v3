

export class VideoSaturation {
    public name?: string;
    private 'execution_order'?: number;
    public saturation?: string;
    public constructor() { 
    }
    public withName(name: string): VideoSaturation {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoSaturation {
        this['execution_order'] = executionOrder;
        return this;
    }
    public set executionOrder(executionOrder: number  | undefined) {
        this['execution_order'] = executionOrder;
    }
    public get executionOrder(): number | undefined {
        return this['execution_order'];
    }
    public withSaturation(saturation: string): VideoSaturation {
        this['saturation'] = saturation;
        return this;
    }
}