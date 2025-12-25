

export class ReleaseStorageVOV5 {
    private 'used_capacity'?: string;
    private 'total_capacity'?: string;
    private 'used_capacity_size'?: number;
    private 'total_capacity_size'?: number;
    private 'package_type'?: string;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withUsedCapacity(usedCapacity: string): ReleaseStorageVOV5 {
        this['used_capacity'] = usedCapacity;
        return this;
    }
    public set usedCapacity(usedCapacity: string  | undefined) {
        this['used_capacity'] = usedCapacity;
    }
    public get usedCapacity(): string | undefined {
        return this['used_capacity'];
    }
    public withTotalCapacity(totalCapacity: string): ReleaseStorageVOV5 {
        this['total_capacity'] = totalCapacity;
        return this;
    }
    public set totalCapacity(totalCapacity: string  | undefined) {
        this['total_capacity'] = totalCapacity;
    }
    public get totalCapacity(): string | undefined {
        return this['total_capacity'];
    }
    public withUsedCapacitySize(usedCapacitySize: number): ReleaseStorageVOV5 {
        this['used_capacity_size'] = usedCapacitySize;
        return this;
    }
    public set usedCapacitySize(usedCapacitySize: number  | undefined) {
        this['used_capacity_size'] = usedCapacitySize;
    }
    public get usedCapacitySize(): number | undefined {
        return this['used_capacity_size'];
    }
    public withTotalCapacitySize(totalCapacitySize: number): ReleaseStorageVOV5 {
        this['total_capacity_size'] = totalCapacitySize;
        return this;
    }
    public set totalCapacitySize(totalCapacitySize: number  | undefined) {
        this['total_capacity_size'] = totalCapacitySize;
    }
    public get totalCapacitySize(): number | undefined {
        return this['total_capacity_size'];
    }
    public withPackageType(packageType: string): ReleaseStorageVOV5 {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withTotalCount(totalCount: number): ReleaseStorageVOV5 {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}