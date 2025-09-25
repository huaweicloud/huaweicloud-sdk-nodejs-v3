

export class ResourceTimeDetails {
    private 'cpu_time'?: number;
    private 'data_io_time'?: number;
    private 'other_time'?: number;
    public constructor(cpuTime?: number, dataIoTime?: number, otherTime?: number) { 
        this['cpu_time'] = cpuTime;
        this['data_io_time'] = dataIoTime;
        this['other_time'] = otherTime;
    }
    public withCpuTime(cpuTime: number): ResourceTimeDetails {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withDataIoTime(dataIoTime: number): ResourceTimeDetails {
        this['data_io_time'] = dataIoTime;
        return this;
    }
    public set dataIoTime(dataIoTime: number  | undefined) {
        this['data_io_time'] = dataIoTime;
    }
    public get dataIoTime(): number | undefined {
        return this['data_io_time'];
    }
    public withOtherTime(otherTime: number): ResourceTimeDetails {
        this['other_time'] = otherTime;
        return this;
    }
    public set otherTime(otherTime: number  | undefined) {
        this['other_time'] = otherTime;
    }
    public get otherTime(): number | undefined {
        return this['other_time'];
    }
}