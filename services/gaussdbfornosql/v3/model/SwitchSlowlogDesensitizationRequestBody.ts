

export class SwitchSlowlogDesensitizationRequestBody {
    private 'desensitization_status'?: string;
    public constructor(desensitizationStatus?: string) { 
        this['desensitization_status'] = desensitizationStatus;
    }
    public withDesensitizationStatus(desensitizationStatus: string): SwitchSlowlogDesensitizationRequestBody {
        this['desensitization_status'] = desensitizationStatus;
        return this;
    }
    public set desensitizationStatus(desensitizationStatus: string  | undefined) {
        this['desensitization_status'] = desensitizationStatus;
    }
    public get desensitizationStatus(): string | undefined {
        return this['desensitization_status'];
    }
}