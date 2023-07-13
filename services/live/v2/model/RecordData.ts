

export class RecordData {
    private 'concurrent_count'?: number | undefined;
    public time?: string;
    public constructor() { 
    }
    public withConcurrentCount(concurrentCount: number): RecordData {
        this['concurrent_count'] = concurrentCount;
        return this;
    }
    public set concurrentCount(concurrentCount: number | undefined) {
        this['concurrent_count'] = concurrentCount;
    }
    public get concurrentCount() {
        return this['concurrent_count'];
    }
    public withTime(time: string): RecordData {
        this['time'] = time;
        return this;
    }
}