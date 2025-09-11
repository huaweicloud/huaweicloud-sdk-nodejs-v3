

export class DiskInfo {
    private 'data_available'?: number;
    private 'data_total'?: number;
    private 'data_use_percent'?: number;
    public id?: string;
    private 'swap_available'?: number;
    private 'swap_total'?: number;
    private 'swap_use_percent'?: number;
    private 'system_available'?: number;
    private 'system_total'?: number;
    private 'system_use_percent'?: number;
    public time?: string;
    public constructor() { 
    }
    public withDataAvailable(dataAvailable: number): DiskInfo {
        this['data_available'] = dataAvailable;
        return this;
    }
    public set dataAvailable(dataAvailable: number  | undefined) {
        this['data_available'] = dataAvailable;
    }
    public get dataAvailable(): number | undefined {
        return this['data_available'];
    }
    public withDataTotal(dataTotal: number): DiskInfo {
        this['data_total'] = dataTotal;
        return this;
    }
    public set dataTotal(dataTotal: number  | undefined) {
        this['data_total'] = dataTotal;
    }
    public get dataTotal(): number | undefined {
        return this['data_total'];
    }
    public withDataUsePercent(dataUsePercent: number): DiskInfo {
        this['data_use_percent'] = dataUsePercent;
        return this;
    }
    public set dataUsePercent(dataUsePercent: number  | undefined) {
        this['data_use_percent'] = dataUsePercent;
    }
    public get dataUsePercent(): number | undefined {
        return this['data_use_percent'];
    }
    public withId(id: string): DiskInfo {
        this['id'] = id;
        return this;
    }
    public withSwapAvailable(swapAvailable: number): DiskInfo {
        this['swap_available'] = swapAvailable;
        return this;
    }
    public set swapAvailable(swapAvailable: number  | undefined) {
        this['swap_available'] = swapAvailable;
    }
    public get swapAvailable(): number | undefined {
        return this['swap_available'];
    }
    public withSwapTotal(swapTotal: number): DiskInfo {
        this['swap_total'] = swapTotal;
        return this;
    }
    public set swapTotal(swapTotal: number  | undefined) {
        this['swap_total'] = swapTotal;
    }
    public get swapTotal(): number | undefined {
        return this['swap_total'];
    }
    public withSwapUsePercent(swapUsePercent: number): DiskInfo {
        this['swap_use_percent'] = swapUsePercent;
        return this;
    }
    public set swapUsePercent(swapUsePercent: number  | undefined) {
        this['swap_use_percent'] = swapUsePercent;
    }
    public get swapUsePercent(): number | undefined {
        return this['swap_use_percent'];
    }
    public withSystemAvailable(systemAvailable: number): DiskInfo {
        this['system_available'] = systemAvailable;
        return this;
    }
    public set systemAvailable(systemAvailable: number  | undefined) {
        this['system_available'] = systemAvailable;
    }
    public get systemAvailable(): number | undefined {
        return this['system_available'];
    }
    public withSystemTotal(systemTotal: number): DiskInfo {
        this['system_total'] = systemTotal;
        return this;
    }
    public set systemTotal(systemTotal: number  | undefined) {
        this['system_total'] = systemTotal;
    }
    public get systemTotal(): number | undefined {
        return this['system_total'];
    }
    public withSystemUsePercent(systemUsePercent: number): DiskInfo {
        this['system_use_percent'] = systemUsePercent;
        return this;
    }
    public set systemUsePercent(systemUsePercent: number  | undefined) {
        this['system_use_percent'] = systemUsePercent;
    }
    public get systemUsePercent(): number | undefined {
        return this['system_use_percent'];
    }
    public withTime(time: string): DiskInfo {
        this['time'] = time;
        return this;
    }
}