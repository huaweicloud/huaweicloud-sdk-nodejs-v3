import { NetworkConnectionStatus } from './NetworkConnectionStatus';


export class NetworkStatus {
    public phase?: string;
    public connectionStatus?: NetworkConnectionStatus;
    public constructor(phase?: string) { 
        this['phase'] = phase;
    }
    public withPhase(phase: string): NetworkStatus {
        this['phase'] = phase;
        return this;
    }
    public withConnectionStatus(connectionStatus: NetworkConnectionStatus): NetworkStatus {
        this['connectionStatus'] = connectionStatus;
        return this;
    }
}