

export class ShowGcTaskRequest {
    private 'instance_id'?: string;
    private 'gc_id'?: number;
    public constructor(instanceId?: string, gcId?: number) { 
        this['instance_id'] = instanceId;
        this['gc_id'] = gcId;
    }
    public withInstanceId(instanceId: string): ShowGcTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGcId(gcId: number): ShowGcTaskRequest {
        this['gc_id'] = gcId;
        return this;
    }
    public set gcId(gcId: number  | undefined) {
        this['gc_id'] = gcId;
    }
    public get gcId(): number | undefined {
        return this['gc_id'];
    }
}