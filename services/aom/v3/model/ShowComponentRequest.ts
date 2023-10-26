

export class ShowComponentRequest {
    private 'component_id'?: string;
    public constructor(componentId?: string) { 
        this['component_id'] = componentId;
    }
    public withComponentId(componentId: string): ShowComponentRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
}