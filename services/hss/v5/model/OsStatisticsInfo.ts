

export class OsStatisticsInfo {
    private 'os_name'?: string;
    private 'os_type'?: string;
    private 'number'?: number;
    public constructor() { 
    }
    public withOsName(osName: string): OsStatisticsInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsType(osType: string): OsStatisticsInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withModelNumber(modelNumber: number): OsStatisticsInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
}