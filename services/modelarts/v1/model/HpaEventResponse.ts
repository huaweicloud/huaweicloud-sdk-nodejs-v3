

export class HpaEventResponse {
    public id?: string;
    private 'hpa_id'?: string;
    public status?: string;
    public message?: string;
    private 'current_replicas'?: number;
    private 'target_replicas'?: number;
    private 'final_replicas'?: number;
    private 'record_time'?: string;
    public constructor() { 
    }
    public withId(id: string): HpaEventResponse {
        this['id'] = id;
        return this;
    }
    public withHpaId(hpaId: string): HpaEventResponse {
        this['hpa_id'] = hpaId;
        return this;
    }
    public set hpaId(hpaId: string  | undefined) {
        this['hpa_id'] = hpaId;
    }
    public get hpaId(): string | undefined {
        return this['hpa_id'];
    }
    public withStatus(status: string): HpaEventResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): HpaEventResponse {
        this['message'] = message;
        return this;
    }
    public withCurrentReplicas(currentReplicas: number): HpaEventResponse {
        this['current_replicas'] = currentReplicas;
        return this;
    }
    public set currentReplicas(currentReplicas: number  | undefined) {
        this['current_replicas'] = currentReplicas;
    }
    public get currentReplicas(): number | undefined {
        return this['current_replicas'];
    }
    public withTargetReplicas(targetReplicas: number): HpaEventResponse {
        this['target_replicas'] = targetReplicas;
        return this;
    }
    public set targetReplicas(targetReplicas: number  | undefined) {
        this['target_replicas'] = targetReplicas;
    }
    public get targetReplicas(): number | undefined {
        return this['target_replicas'];
    }
    public withFinalReplicas(finalReplicas: number): HpaEventResponse {
        this['final_replicas'] = finalReplicas;
        return this;
    }
    public set finalReplicas(finalReplicas: number  | undefined) {
        this['final_replicas'] = finalReplicas;
    }
    public get finalReplicas(): number | undefined {
        return this['final_replicas'];
    }
    public withRecordTime(recordTime: string): HpaEventResponse {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: string  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): string | undefined {
        return this['record_time'];
    }
}