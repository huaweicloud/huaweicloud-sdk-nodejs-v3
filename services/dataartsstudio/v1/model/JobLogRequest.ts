

export class JobLogRequest {
    private 'bridge_id'?: string;
    private 'classification_id'?: string;
    public constructor(bridgeId?: string) { 
        this['bridge_id'] = bridgeId;
    }
    public withBridgeId(bridgeId: string): JobLogRequest {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
    public withClassificationId(classificationId: string): JobLogRequest {
        this['classification_id'] = classificationId;
        return this;
    }
    public set classificationId(classificationId: string  | undefined) {
        this['classification_id'] = classificationId;
    }
    public get classificationId(): string | undefined {
        return this['classification_id'];
    }
}