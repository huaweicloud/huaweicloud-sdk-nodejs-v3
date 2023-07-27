import { LatencyStats } from './LatencyStats';
import { NetworkTrafficStats } from './NetworkTrafficStats';
import { RequestCountStats } from './RequestCountStats';


export class StatisticsGroup {
    private 'max_latency'?: number;
    private 'avg_latency'?: number;
    private 'req_count'?: number;
    private 'req_count2xx'?: number;
    private 'req_count4xx'?: number;
    private 'req_count5xx'?: number;
    private 'req_count_error'?: number;
    private 'output_throughput'?: number;
    private 'input_throughput'?: number;
    private 'current_minute'?: number;
    private 'group_id'?: string;
    public provider?: string;
    private 'req_time'?: Date;
    private 'register_time'?: Date;
    public constructor() { 
    }
    public withMaxLatency(maxLatency: number): StatisticsGroup {
        this['max_latency'] = maxLatency;
        return this;
    }
    public set maxLatency(maxLatency: number  | undefined) {
        this['max_latency'] = maxLatency;
    }
    public get maxLatency(): number | undefined {
        return this['max_latency'];
    }
    public withAvgLatency(avgLatency: number): StatisticsGroup {
        this['avg_latency'] = avgLatency;
        return this;
    }
    public set avgLatency(avgLatency: number  | undefined) {
        this['avg_latency'] = avgLatency;
    }
    public get avgLatency(): number | undefined {
        return this['avg_latency'];
    }
    public withReqCount(reqCount: number): StatisticsGroup {
        this['req_count'] = reqCount;
        return this;
    }
    public set reqCount(reqCount: number  | undefined) {
        this['req_count'] = reqCount;
    }
    public get reqCount(): number | undefined {
        return this['req_count'];
    }
    public withReqCount2xx(reqCount2xx: number): StatisticsGroup {
        this['req_count2xx'] = reqCount2xx;
        return this;
    }
    public set reqCount2xx(reqCount2xx: number  | undefined) {
        this['req_count2xx'] = reqCount2xx;
    }
    public get reqCount2xx(): number | undefined {
        return this['req_count2xx'];
    }
    public withReqCount4xx(reqCount4xx: number): StatisticsGroup {
        this['req_count4xx'] = reqCount4xx;
        return this;
    }
    public set reqCount4xx(reqCount4xx: number  | undefined) {
        this['req_count4xx'] = reqCount4xx;
    }
    public get reqCount4xx(): number | undefined {
        return this['req_count4xx'];
    }
    public withReqCount5xx(reqCount5xx: number): StatisticsGroup {
        this['req_count5xx'] = reqCount5xx;
        return this;
    }
    public set reqCount5xx(reqCount5xx: number  | undefined) {
        this['req_count5xx'] = reqCount5xx;
    }
    public get reqCount5xx(): number | undefined {
        return this['req_count5xx'];
    }
    public withReqCountError(reqCountError: number): StatisticsGroup {
        this['req_count_error'] = reqCountError;
        return this;
    }
    public set reqCountError(reqCountError: number  | undefined) {
        this['req_count_error'] = reqCountError;
    }
    public get reqCountError(): number | undefined {
        return this['req_count_error'];
    }
    public withOutputThroughput(outputThroughput: number): StatisticsGroup {
        this['output_throughput'] = outputThroughput;
        return this;
    }
    public set outputThroughput(outputThroughput: number  | undefined) {
        this['output_throughput'] = outputThroughput;
    }
    public get outputThroughput(): number | undefined {
        return this['output_throughput'];
    }
    public withInputThroughput(inputThroughput: number): StatisticsGroup {
        this['input_throughput'] = inputThroughput;
        return this;
    }
    public set inputThroughput(inputThroughput: number  | undefined) {
        this['input_throughput'] = inputThroughput;
    }
    public get inputThroughput(): number | undefined {
        return this['input_throughput'];
    }
    public withCurrentMinute(currentMinute: number): StatisticsGroup {
        this['current_minute'] = currentMinute;
        return this;
    }
    public set currentMinute(currentMinute: number  | undefined) {
        this['current_minute'] = currentMinute;
    }
    public get currentMinute(): number | undefined {
        return this['current_minute'];
    }
    public withGroupId(groupId: string): StatisticsGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProvider(provider: string): StatisticsGroup {
        this['provider'] = provider;
        return this;
    }
    public withReqTime(reqTime: Date): StatisticsGroup {
        this['req_time'] = reqTime;
        return this;
    }
    public set reqTime(reqTime: Date  | undefined) {
        this['req_time'] = reqTime;
    }
    public get reqTime(): Date | undefined {
        return this['req_time'];
    }
    public withRegisterTime(registerTime: Date): StatisticsGroup {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
}