import { HttpGetDTO } from './HttpGetDTO';
import { TcpSocketDTO } from './TcpSocketDTO';


export class ProbeDTO {
    private 'exec_command'?: string;
    private 'tcp_socket'?: TcpSocketDTO;
    private 'http_get'?: HttpGetDTO;
    private 'initial_delay_seconds'?: number;
    private 'timeout_seconds'?: number;
    private 'period_seconds'?: number;
    private 'failure_threshold'?: number;
    public constructor(initialDelaySeconds?: number, timeoutSeconds?: number) { 
        this['initial_delay_seconds'] = initialDelaySeconds;
        this['timeout_seconds'] = timeoutSeconds;
    }
    public withExecCommand(execCommand: string): ProbeDTO {
        this['exec_command'] = execCommand;
        return this;
    }
    public set execCommand(execCommand: string  | undefined) {
        this['exec_command'] = execCommand;
    }
    public get execCommand(): string | undefined {
        return this['exec_command'];
    }
    public withTcpSocket(tcpSocket: TcpSocketDTO): ProbeDTO {
        this['tcp_socket'] = tcpSocket;
        return this;
    }
    public set tcpSocket(tcpSocket: TcpSocketDTO  | undefined) {
        this['tcp_socket'] = tcpSocket;
    }
    public get tcpSocket(): TcpSocketDTO | undefined {
        return this['tcp_socket'];
    }
    public withHttpGet(httpGet: HttpGetDTO): ProbeDTO {
        this['http_get'] = httpGet;
        return this;
    }
    public set httpGet(httpGet: HttpGetDTO  | undefined) {
        this['http_get'] = httpGet;
    }
    public get httpGet(): HttpGetDTO | undefined {
        return this['http_get'];
    }
    public withInitialDelaySeconds(initialDelaySeconds: number): ProbeDTO {
        this['initial_delay_seconds'] = initialDelaySeconds;
        return this;
    }
    public set initialDelaySeconds(initialDelaySeconds: number  | undefined) {
        this['initial_delay_seconds'] = initialDelaySeconds;
    }
    public get initialDelaySeconds(): number | undefined {
        return this['initial_delay_seconds'];
    }
    public withTimeoutSeconds(timeoutSeconds: number): ProbeDTO {
        this['timeout_seconds'] = timeoutSeconds;
        return this;
    }
    public set timeoutSeconds(timeoutSeconds: number  | undefined) {
        this['timeout_seconds'] = timeoutSeconds;
    }
    public get timeoutSeconds(): number | undefined {
        return this['timeout_seconds'];
    }
    public withPeriodSeconds(periodSeconds: number): ProbeDTO {
        this['period_seconds'] = periodSeconds;
        return this;
    }
    public set periodSeconds(periodSeconds: number  | undefined) {
        this['period_seconds'] = periodSeconds;
    }
    public get periodSeconds(): number | undefined {
        return this['period_seconds'];
    }
    public withFailureThreshold(failureThreshold: number): ProbeDTO {
        this['failure_threshold'] = failureThreshold;
        return this;
    }
    public set failureThreshold(failureThreshold: number  | undefined) {
        this['failure_threshold'] = failureThreshold;
    }
    public get failureThreshold(): number | undefined {
        return this['failure_threshold'];
    }
}