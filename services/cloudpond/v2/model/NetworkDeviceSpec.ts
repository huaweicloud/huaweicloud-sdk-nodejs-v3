

export class NetworkDeviceSpec {
    public id?: string;
    public name?: string;
    public power?: number;
    public unit?: number;
    private 'performance_type'?: string;
    public constructor() { 
    }
    public withId(id: string): NetworkDeviceSpec {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NetworkDeviceSpec {
        this['name'] = name;
        return this;
    }
    public withPower(power: number): NetworkDeviceSpec {
        this['power'] = power;
        return this;
    }
    public withUnit(unit: number): NetworkDeviceSpec {
        this['unit'] = unit;
        return this;
    }
    public withPerformanceType(performanceType: string): NetworkDeviceSpec {
        this['performance_type'] = performanceType;
        return this;
    }
    public set performanceType(performanceType: string  | undefined) {
        this['performance_type'] = performanceType;
    }
    public get performanceType(): string | undefined {
        return this['performance_type'];
    }
}