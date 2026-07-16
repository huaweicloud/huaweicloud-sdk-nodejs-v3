

export class HpaRules {
    public name?: string;
    public id?: string;
    public disable?: boolean;
    public type?: string;
    public status?: string;
    public operate?: string;
    public schedule?: string;
    private 'target_replicas'?: number;
    private 'min_replicas'?: number;
    private 'max_replicas'?: number;
    private 'downscale_window'?: number;
    private 'upscale_window'?: number;
    public constructor(type?: string, schedule?: string, targetReplicas?: number) { 
        this['type'] = type;
        this['schedule'] = schedule;
        this['target_replicas'] = targetReplicas;
    }
    public withName(name: string): HpaRules {
        this['name'] = name;
        return this;
    }
    public withId(id: string): HpaRules {
        this['id'] = id;
        return this;
    }
    public withDisable(disable: boolean): HpaRules {
        this['disable'] = disable;
        return this;
    }
    public withType(type: string): HpaRules {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): HpaRules {
        this['status'] = status;
        return this;
    }
    public withOperate(operate: string): HpaRules {
        this['operate'] = operate;
        return this;
    }
    public withSchedule(schedule: string): HpaRules {
        this['schedule'] = schedule;
        return this;
    }
    public withTargetReplicas(targetReplicas: number): HpaRules {
        this['target_replicas'] = targetReplicas;
        return this;
    }
    public set targetReplicas(targetReplicas: number  | undefined) {
        this['target_replicas'] = targetReplicas;
    }
    public get targetReplicas(): number | undefined {
        return this['target_replicas'];
    }
    public withMinReplicas(minReplicas: number): HpaRules {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
    public withMaxReplicas(maxReplicas: number): HpaRules {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withDownscaleWindow(downscaleWindow: number): HpaRules {
        this['downscale_window'] = downscaleWindow;
        return this;
    }
    public set downscaleWindow(downscaleWindow: number  | undefined) {
        this['downscale_window'] = downscaleWindow;
    }
    public get downscaleWindow(): number | undefined {
        return this['downscale_window'];
    }
    public withUpscaleWindow(upscaleWindow: number): HpaRules {
        this['upscale_window'] = upscaleWindow;
        return this;
    }
    public set upscaleWindow(upscaleWindow: number  | undefined) {
        this['upscale_window'] = upscaleWindow;
    }
    public get upscaleWindow(): number | undefined {
        return this['upscale_window'];
    }
}