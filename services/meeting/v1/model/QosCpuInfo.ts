import { QosDataElement } from './QosDataElement';


export class QosCpuInfo {
    private 'client_cpu_max'?: Array<QosDataElement>;
    private 'system_cpu_max'?: Array<QosDataElement>;
    public constructor() { 
    }
    public withClientCpuMax(clientCpuMax: Array<QosDataElement>): QosCpuInfo {
        this['client_cpu_max'] = clientCpuMax;
        return this;
    }
    public set clientCpuMax(clientCpuMax: Array<QosDataElement>  | undefined) {
        this['client_cpu_max'] = clientCpuMax;
    }
    public get clientCpuMax(): Array<QosDataElement> | undefined {
        return this['client_cpu_max'];
    }
    public withSystemCpuMax(systemCpuMax: Array<QosDataElement>): QosCpuInfo {
        this['system_cpu_max'] = systemCpuMax;
        return this;
    }
    public set systemCpuMax(systemCpuMax: Array<QosDataElement>  | undefined) {
        this['system_cpu_max'] = systemCpuMax;
    }
    public get systemCpuMax(): Array<QosDataElement> | undefined {
        return this['system_cpu_max'];
    }
}