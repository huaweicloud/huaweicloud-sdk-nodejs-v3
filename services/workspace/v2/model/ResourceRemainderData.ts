

export class ResourceRemainderData {
    public type?: string;
    public remainder?: number;
    public need?: number;
    private 'volume_type'?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceRemainderData {
        this['type'] = type;
        return this;
    }
    public withRemainder(remainder: number): ResourceRemainderData {
        this['remainder'] = remainder;
        return this;
    }
    public withNeed(need: number): ResourceRemainderData {
        this['need'] = need;
        return this;
    }
    public withVolumeType(volumeType: string): ResourceRemainderData {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
}