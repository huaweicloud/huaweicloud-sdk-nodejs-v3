

export class UpdatePipeRequestBody {
    public description?: string;
    public shards?: number;
    private 'storage_period'?: number;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePipeRequestBody {
        this['description'] = description;
        return this;
    }
    public withShards(shards: number): UpdatePipeRequestBody {
        this['shards'] = shards;
        return this;
    }
    public withStoragePeriod(storagePeriod: number): UpdatePipeRequestBody {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
}