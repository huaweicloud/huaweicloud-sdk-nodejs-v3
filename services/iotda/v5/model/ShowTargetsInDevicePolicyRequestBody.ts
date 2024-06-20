

export class ShowTargetsInDevicePolicyRequestBody {
    private 'target_type'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withTargetType(targetType: string): ShowTargetsInDevicePolicyRequestBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withLimit(limit: number): ShowTargetsInDevicePolicyRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowTargetsInDevicePolicyRequestBody {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ShowTargetsInDevicePolicyRequestBody {
        this['offset'] = offset;
        return this;
    }
}