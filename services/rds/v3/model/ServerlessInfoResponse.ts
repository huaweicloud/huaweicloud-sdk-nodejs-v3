

export class ServerlessInfoResponse {
    private 'min_compute_unit'?: string;
    private 'max_compute_unit'?: string;
    public constructor(minComputeUnit?: string, maxComputeUnit?: string) { 
        this['min_compute_unit'] = minComputeUnit;
        this['max_compute_unit'] = maxComputeUnit;
    }
    public withMinComputeUnit(minComputeUnit: string): ServerlessInfoResponse {
        this['min_compute_unit'] = minComputeUnit;
        return this;
    }
    public set minComputeUnit(minComputeUnit: string  | undefined) {
        this['min_compute_unit'] = minComputeUnit;
    }
    public get minComputeUnit(): string | undefined {
        return this['min_compute_unit'];
    }
    public withMaxComputeUnit(maxComputeUnit: string): ServerlessInfoResponse {
        this['max_compute_unit'] = maxComputeUnit;
        return this;
    }
    public set maxComputeUnit(maxComputeUnit: string  | undefined) {
        this['max_compute_unit'] = maxComputeUnit;
    }
    public get maxComputeUnit(): string | undefined {
        return this['max_compute_unit'];
    }
}