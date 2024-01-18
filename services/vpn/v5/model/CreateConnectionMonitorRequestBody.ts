import { CreateConnectionMonitorRequestBodyContent } from './CreateConnectionMonitorRequestBodyContent';


export class CreateConnectionMonitorRequestBody {
    private 'connection_monitor'?: CreateConnectionMonitorRequestBodyContent;
    public constructor(connectionMonitor?: CreateConnectionMonitorRequestBodyContent) { 
        this['connection_monitor'] = connectionMonitor;
    }
    public withConnectionMonitor(connectionMonitor: CreateConnectionMonitorRequestBodyContent): CreateConnectionMonitorRequestBody {
        this['connection_monitor'] = connectionMonitor;
        return this;
    }
    public set connectionMonitor(connectionMonitor: CreateConnectionMonitorRequestBodyContent  | undefined) {
        this['connection_monitor'] = connectionMonitor;
    }
    public get connectionMonitor(): CreateConnectionMonitorRequestBodyContent | undefined {
        return this['connection_monitor'];
    }
}