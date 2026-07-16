

export class RollingUpdateResponse {
    private 'max_surge'?: string;
    private 'max_unavailable'?: string;
    public constructor() { 
    }
    public withMaxSurge(maxSurge: string): RollingUpdateResponse {
        this['max_surge'] = maxSurge;
        return this;
    }
    public set maxSurge(maxSurge: string  | undefined) {
        this['max_surge'] = maxSurge;
    }
    public get maxSurge(): string | undefined {
        return this['max_surge'];
    }
    public withMaxUnavailable(maxUnavailable: string): RollingUpdateResponse {
        this['max_unavailable'] = maxUnavailable;
        return this;
    }
    public set maxUnavailable(maxUnavailable: string  | undefined) {
        this['max_unavailable'] = maxUnavailable;
    }
    public get maxUnavailable(): string | undefined {
        return this['max_unavailable'];
    }
}