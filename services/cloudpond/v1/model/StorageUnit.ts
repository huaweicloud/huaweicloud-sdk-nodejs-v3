import { StorageType } from './StorageType';


export class StorageUnit {
    private 'storage_type'?: StorageType;
    public capacity?: number;
    public gears?: Array<number>;
    private 'flavor_type'?: string;
    public count?: number;
    public constructor(storageType?: StorageType, capacity?: number, gears?: Array<number>, flavorType?: string, count?: number) { 
        this['storage_type'] = storageType;
        this['capacity'] = capacity;
        this['gears'] = gears;
        this['flavor_type'] = flavorType;
        this['count'] = count;
    }
    public withStorageType(storageType: StorageType): StorageUnit {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: StorageType  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): StorageType | undefined {
        return this['storage_type'];
    }
    public withCapacity(capacity: number): StorageUnit {
        this['capacity'] = capacity;
        return this;
    }
    public withGears(gears: Array<number>): StorageUnit {
        this['gears'] = gears;
        return this;
    }
    public withFlavorType(flavorType: string): StorageUnit {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withCount(count: number): StorageUnit {
        this['count'] = count;
        return this;
    }
}