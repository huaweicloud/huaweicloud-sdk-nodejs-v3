

export class StrategyConfig {
    public concurrency: number;
    private 'concurrent_num': number | undefined;
    public constructor(concurrency?: any, concurrentNum?: any) { 
        this['concurrency'] = concurrency;
        this['concurrent_num'] = concurrentNum;
    }
    public withConcurrency(concurrency: number): StrategyConfig {
        this['concurrency'] = concurrency;
        return this;
    }
    public withConcurrentNum(concurrentNum: number): StrategyConfig {
        this['concurrent_num'] = concurrentNum;
        return this;
    }
    public set concurrentNum(concurrentNum: number | undefined) {
        this['concurrent_num'] = concurrentNum;
    }
    public get concurrentNum() {
        return this['concurrent_num'];
    }
}