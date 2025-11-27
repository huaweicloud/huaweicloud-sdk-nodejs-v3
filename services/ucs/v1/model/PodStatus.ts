import { ContainerStatus } from './ContainerStatus';


export class PodStatus {
    public phase?: string;
    public hostIP?: string;
    public startTime?: string;
    public containerStatuses?: Array<ContainerStatus>;
    public constructor() { 
    }
    public withPhase(phase: string): PodStatus {
        this['phase'] = phase;
        return this;
    }
    public withHostIP(hostIP: string): PodStatus {
        this['hostIP'] = hostIP;
        return this;
    }
    public withStartTime(startTime: string): PodStatus {
        this['startTime'] = startTime;
        return this;
    }
    public withContainerStatuses(containerStatuses: Array<ContainerStatus>): PodStatus {
        this['containerStatuses'] = containerStatuses;
        return this;
    }
}