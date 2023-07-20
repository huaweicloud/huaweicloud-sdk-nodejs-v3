

export class CircuitBreaker {
    private 'switch'?: boolean;
    private 'dead_num'?: number;
    private 'dead_ratio'?: number;
    private 'block_time'?: number;
    private 'superposition_num'?: number;
    private 'suspend_num'?: number;
    private 'sus_block_time'?: number;
    public constructor() { 
    }
    public withSwitch(_switch: boolean): CircuitBreaker {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: boolean  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): boolean | undefined {
        return this['switch'];
    }
    public withDeadNum(deadNum: number): CircuitBreaker {
        this['dead_num'] = deadNum;
        return this;
    }
    public set deadNum(deadNum: number  | undefined) {
        this['dead_num'] = deadNum;
    }
    public get deadNum(): number | undefined {
        return this['dead_num'];
    }
    public withDeadRatio(deadRatio: number): CircuitBreaker {
        this['dead_ratio'] = deadRatio;
        return this;
    }
    public set deadRatio(deadRatio: number  | undefined) {
        this['dead_ratio'] = deadRatio;
    }
    public get deadRatio(): number | undefined {
        return this['dead_ratio'];
    }
    public withBlockTime(blockTime: number): CircuitBreaker {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withSuperpositionNum(superpositionNum: number): CircuitBreaker {
        this['superposition_num'] = superpositionNum;
        return this;
    }
    public set superpositionNum(superpositionNum: number  | undefined) {
        this['superposition_num'] = superpositionNum;
    }
    public get superpositionNum(): number | undefined {
        return this['superposition_num'];
    }
    public withSuspendNum(suspendNum: number): CircuitBreaker {
        this['suspend_num'] = suspendNum;
        return this;
    }
    public set suspendNum(suspendNum: number  | undefined) {
        this['suspend_num'] = suspendNum;
    }
    public get suspendNum(): number | undefined {
        return this['suspend_num'];
    }
    public withSusBlockTime(susBlockTime: number): CircuitBreaker {
        this['sus_block_time'] = susBlockTime;
        return this;
    }
    public set susBlockTime(susBlockTime: number  | undefined) {
        this['sus_block_time'] = susBlockTime;
    }
    public get susBlockTime(): number | undefined {
        return this['sus_block_time'];
    }
}