import { BackendLatencyStats } from './BackendLatencyStats';
import { InnerLatencyStats } from './InnerLatencyStats';
import { LatencyStats } from './LatencyStats';
import { NetworkTrafficStats } from './NetworkTrafficStats';
import { RequestCountStats } from './RequestCountStats';


export class StatisticsAPI {
    private 'max_latency'?: number;
    private 'avg_latency'?: number;
    private 'req_count'?: number;
    private 'req_count2xx'?: number;
    private 'req_count4xx'?: number;
    private 'req_count5xx'?: number;
    private 'req_count_error'?: number;
    private 'max_inner_latency'?: number;
    private 'avg_inner_latency'?: number;
    private 'max_backend_latency'?: number;
    private 'avg_backend_latency'?: number;
    private 'output_throughput'?: number;
    private 'input_throughput'?: number;
    private 'current_minute'?: number;
    public cycle?: StatisticsAPICycleEnum | string;
    private 'api_id'?: string;
    private 'group_id'?: string;
    public provider?: string;
    private 'req_time'?: Date;
    private 'register_time'?: Date;
    public status?: StatisticsAPIStatusEnum | number;
    public constructor() { 
    }
    public withMaxLatency(maxLatency: number): StatisticsAPI {
        this['max_latency'] = maxLatency;
        return this;
    }
    public set maxLatency(maxLatency: number  | undefined) {
        this['max_latency'] = maxLatency;
    }
    public get maxLatency(): number | undefined {
        return this['max_latency'];
    }
    public withAvgLatency(avgLatency: number): StatisticsAPI {
        this['avg_latency'] = avgLatency;
        return this;
    }
    public set avgLatency(avgLatency: number  | undefined) {
        this['avg_latency'] = avgLatency;
    }
    public get avgLatency(): number | undefined {
        return this['avg_latency'];
    }
    public withReqCount(reqCount: number): StatisticsAPI {
        this['req_count'] = reqCount;
        return this;
    }
    public set reqCount(reqCount: number  | undefined) {
        this['req_count'] = reqCount;
    }
    public get reqCount(): number | undefined {
        return this['req_count'];
    }
    public withReqCount2xx(reqCount2xx: number): StatisticsAPI {
        this['req_count2xx'] = reqCount2xx;
        return this;
    }
    public set reqCount2xx(reqCount2xx: number  | undefined) {
        this['req_count2xx'] = reqCount2xx;
    }
    public get reqCount2xx(): number | undefined {
        return this['req_count2xx'];
    }
    public withReqCount4xx(reqCount4xx: number): StatisticsAPI {
        this['req_count4xx'] = reqCount4xx;
        return this;
    }
    public set reqCount4xx(reqCount4xx: number  | undefined) {
        this['req_count4xx'] = reqCount4xx;
    }
    public get reqCount4xx(): number | undefined {
        return this['req_count4xx'];
    }
    public withReqCount5xx(reqCount5xx: number): StatisticsAPI {
        this['req_count5xx'] = reqCount5xx;
        return this;
    }
    public set reqCount5xx(reqCount5xx: number  | undefined) {
        this['req_count5xx'] = reqCount5xx;
    }
    public get reqCount5xx(): number | undefined {
        return this['req_count5xx'];
    }
    public withReqCountError(reqCountError: number): StatisticsAPI {
        this['req_count_error'] = reqCountError;
        return this;
    }
    public set reqCountError(reqCountError: number  | undefined) {
        this['req_count_error'] = reqCountError;
    }
    public get reqCountError(): number | undefined {
        return this['req_count_error'];
    }
    public withMaxInnerLatency(maxInnerLatency: number): StatisticsAPI {
        this['max_inner_latency'] = maxInnerLatency;
        return this;
    }
    public set maxInnerLatency(maxInnerLatency: number  | undefined) {
        this['max_inner_latency'] = maxInnerLatency;
    }
    public get maxInnerLatency(): number | undefined {
        return this['max_inner_latency'];
    }
    public withAvgInnerLatency(avgInnerLatency: number): StatisticsAPI {
        this['avg_inner_latency'] = avgInnerLatency;
        return this;
    }
    public set avgInnerLatency(avgInnerLatency: number  | undefined) {
        this['avg_inner_latency'] = avgInnerLatency;
    }
    public get avgInnerLatency(): number | undefined {
        return this['avg_inner_latency'];
    }
    public withMaxBackendLatency(maxBackendLatency: number): StatisticsAPI {
        this['max_backend_latency'] = maxBackendLatency;
        return this;
    }
    public set maxBackendLatency(maxBackendLatency: number  | undefined) {
        this['max_backend_latency'] = maxBackendLatency;
    }
    public get maxBackendLatency(): number | undefined {
        return this['max_backend_latency'];
    }
    public withAvgBackendLatency(avgBackendLatency: number): StatisticsAPI {
        this['avg_backend_latency'] = avgBackendLatency;
        return this;
    }
    public set avgBackendLatency(avgBackendLatency: number  | undefined) {
        this['avg_backend_latency'] = avgBackendLatency;
    }
    public get avgBackendLatency(): number | undefined {
        return this['avg_backend_latency'];
    }
    public withOutputThroughput(outputThroughput: number): StatisticsAPI {
        this['output_throughput'] = outputThroughput;
        return this;
    }
    public set outputThroughput(outputThroughput: number  | undefined) {
        this['output_throughput'] = outputThroughput;
    }
    public get outputThroughput(): number | undefined {
        return this['output_throughput'];
    }
    public withInputThroughput(inputThroughput: number): StatisticsAPI {
        this['input_throughput'] = inputThroughput;
        return this;
    }
    public set inputThroughput(inputThroughput: number  | undefined) {
        this['input_throughput'] = inputThroughput;
    }
    public get inputThroughput(): number | undefined {
        return this['input_throughput'];
    }
    public withCurrentMinute(currentMinute: number): StatisticsAPI {
        this['current_minute'] = currentMinute;
        return this;
    }
    public set currentMinute(currentMinute: number  | undefined) {
        this['current_minute'] = currentMinute;
    }
    public get currentMinute(): number | undefined {
        return this['current_minute'];
    }
    public withCycle(cycle: StatisticsAPICycleEnum | string): StatisticsAPI {
        this['cycle'] = cycle;
        return this;
    }
    public withApiId(apiId: string): StatisticsAPI {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withGroupId(groupId: string): StatisticsAPI {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProvider(provider: string): StatisticsAPI {
        this['provider'] = provider;
        return this;
    }
    public withReqTime(reqTime: Date): StatisticsAPI {
        this['req_time'] = reqTime;
        return this;
    }
    public set reqTime(reqTime: Date  | undefined) {
        this['req_time'] = reqTime;
    }
    public get reqTime(): Date | undefined {
        return this['req_time'];
    }
    public withRegisterTime(registerTime: Date): StatisticsAPI {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: StatisticsAPIStatusEnum | number): StatisticsAPI {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StatisticsAPICycleEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum StatisticsAPIStatusEnum {
    NUMBER_1 = 1
}
