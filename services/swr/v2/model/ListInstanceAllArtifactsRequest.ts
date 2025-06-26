

export class ListInstanceAllArtifactsRequest {
    private 'instance_id'?: string;
    public marker?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceAllArtifactsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMarker(marker: number): ListInstanceAllArtifactsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListInstanceAllArtifactsRequest {
        this['limit'] = limit;
        return this;
    }
}