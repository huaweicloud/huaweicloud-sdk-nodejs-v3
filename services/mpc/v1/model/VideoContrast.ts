

export class VideoContrast {
    public name?: string;
    private 'execution_order'?: number;
    public contrast?: string;
    public brightness?: string;
    public constructor() { 
    }
    public withName(name: string): VideoContrast {
        this['name'] = name;
        return this;
    }
    public withExecutionOrder(executionOrder: number): VideoContrast {
        this['execution_order'] = executionOrder;
        return this;
    }
    public set executionOrder(executionOrder: number  | undefined) {
        this['execution_order'] = executionOrder;
    }
    public get executionOrder(): number | undefined {
        return this['execution_order'];
    }
    public withContrast(contrast: string): VideoContrast {
        this['contrast'] = contrast;
        return this;
    }
    public withBrightness(brightness: string): VideoContrast {
        this['brightness'] = brightness;
        return this;
    }
}