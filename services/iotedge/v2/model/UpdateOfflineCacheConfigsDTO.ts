

export class UpdateOfflineCacheConfigsDTO {
    public capacity?: number;
    public constructor() { 
    }
    public withCapacity(capacity: number): UpdateOfflineCacheConfigsDTO {
        this['capacity'] = capacity;
        return this;
    }
}