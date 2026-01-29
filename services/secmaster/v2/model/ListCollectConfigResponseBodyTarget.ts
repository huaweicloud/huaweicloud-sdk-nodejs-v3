

export class ListCollectConfigResponseBodyTarget {
    public pipe?: string;
    public shards?: number;
    private 'storage_mode'?: string;
    public ttl?: number;
    public constructor() { 
    }
    public withPipe(pipe: string): ListCollectConfigResponseBodyTarget {
        this['pipe'] = pipe;
        return this;
    }
    public withShards(shards: number): ListCollectConfigResponseBodyTarget {
        this['shards'] = shards;
        return this;
    }
    public withStorageMode(storageMode: string): ListCollectConfigResponseBodyTarget {
        this['storage_mode'] = storageMode;
        return this;
    }
    public set storageMode(storageMode: string  | undefined) {
        this['storage_mode'] = storageMode;
    }
    public get storageMode(): string | undefined {
        return this['storage_mode'];
    }
    public withTtl(ttl: number): ListCollectConfigResponseBodyTarget {
        this['ttl'] = ttl;
        return this;
    }
}