

export class HpaRule {
    public id?: string;
    private 'hpa_id'?: string;
    public name?: string;
    public type?: string;
    public schedule?: string;
    private 'target_replicas'?: number;
    public disable?: string;
    public status?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): HpaRule {
        this['id'] = id;
        return this;
    }
    public withHpaId(hpaId: string): HpaRule {
        this['hpa_id'] = hpaId;
        return this;
    }
    public set hpaId(hpaId: string  | undefined) {
        this['hpa_id'] = hpaId;
    }
    public get hpaId(): string | undefined {
        return this['hpa_id'];
    }
    public withName(name: string): HpaRule {
        this['name'] = name;
        return this;
    }
    public withType(type: string): HpaRule {
        this['type'] = type;
        return this;
    }
    public withSchedule(schedule: string): HpaRule {
        this['schedule'] = schedule;
        return this;
    }
    public withTargetReplicas(targetReplicas: number): HpaRule {
        this['target_replicas'] = targetReplicas;
        return this;
    }
    public set targetReplicas(targetReplicas: number  | undefined) {
        this['target_replicas'] = targetReplicas;
    }
    public get targetReplicas(): number | undefined {
        return this['target_replicas'];
    }
    public withDisable(disable: string): HpaRule {
        this['disable'] = disable;
        return this;
    }
    public withStatus(status: string): HpaRule {
        this['status'] = status;
        return this;
    }
}