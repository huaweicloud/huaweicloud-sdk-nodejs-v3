import { ComponentUpdateParam } from './ComponentUpdateParam';


export class UpdateComponentRequest {
    private 'component_id'?: string;
    public body?: ComponentUpdateParam;
    public constructor(componentId?: string) { 
        this['component_id'] = componentId;
    }
    public withComponentId(componentId: string): UpdateComponentRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withBody(body: ComponentUpdateParam): UpdateComponentRequest {
        this['body'] = body;
        return this;
    }
}