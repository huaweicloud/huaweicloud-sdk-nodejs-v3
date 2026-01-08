

export class ResourcePackage {
    private 'resource_spec_code'?: string;
    public description?: { [key: string]: string; };
    public status?: string;
    private 'period_type'?: string;
    private 'period_value'?: number;
    private 'measurement_name'?: string;
    public threshold?: number;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): ResourcePackage {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withDescription(description: { [key: string]: string; }): ResourcePackage {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): ResourcePackage {
        this['status'] = status;
        return this;
    }
    public withPeriodType(periodType: string): ResourcePackage {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withPeriodValue(periodValue: number): ResourcePackage {
        this['period_value'] = periodValue;
        return this;
    }
    public set periodValue(periodValue: number  | undefined) {
        this['period_value'] = periodValue;
    }
    public get periodValue(): number | undefined {
        return this['period_value'];
    }
    public withMeasurementName(measurementName: string): ResourcePackage {
        this['measurement_name'] = measurementName;
        return this;
    }
    public set measurementName(measurementName: string  | undefined) {
        this['measurement_name'] = measurementName;
    }
    public get measurementName(): string | undefined {
        return this['measurement_name'];
    }
    public withThreshold(threshold: number): ResourcePackage {
        this['threshold'] = threshold;
        return this;
    }
}