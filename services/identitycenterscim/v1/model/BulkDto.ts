

export class BulkDto {
    public supported?: boolean;
    public maxOperations?: number;
    public maxPayloadSize?: number;
    public constructor() { 
    }
    public withSupported(supported: boolean): BulkDto {
        this['supported'] = supported;
        return this;
    }
    public withMaxOperations(maxOperations: number): BulkDto {
        this['maxOperations'] = maxOperations;
        return this;
    }
    public withMaxPayloadSize(maxPayloadSize: number): BulkDto {
        this['maxPayloadSize'] = maxPayloadSize;
        return this;
    }
}