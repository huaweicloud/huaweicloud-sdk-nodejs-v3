import { QosDataElement } from './QosDataElement';


export class QosCpuInfo {
    private 'client_cpu_max'?: Array<QosDataElement> | undefined;
    private 'system_cpu_max'?: Array<QosDataElement> | undefined;
    public constructor() { 
    }
    public withClientCpuMax(clientCpuMax: Array<QosDataElement>): QosCpuInfo {
        this['client_cpu_max'] = clientCpuMax;
        return this;
    }
    public set clientCpuMax(clientCpuMax: Array<QosDataElement> | undefined) {
        this['client_cpu_max'] = clientCpuMax;
    }
    public get clientCpuMax() {
        return this['client_cpu_max'];
    }
    public withSystemCpuMax(systemCpuMax: Array<QosDataElement>): QosCpuInfo {
        this['system_cpu_max'] = systemCpuMax;
        return this;
    }
    public set systemCpuMax(systemCpuMax: Array<QosDataElement> | undefined) {
        this['system_cpu_max'] = systemCpuMax;
    }
    public get systemCpuMax() {
        return this['system_cpu_max'];
    }
}