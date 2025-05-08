

export class PartitionResp {
    public partition?: number;
    public result?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withPartition(partition: number): PartitionResp {
        this['partition'] = partition;
        return this;
    }
    public withResult(result: string): PartitionResp {
        this['result'] = result;
        return this;
    }
    public withErrorCode(errorCode: string): PartitionResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}