import { HealthCheckConfigurationExec } from './HealthCheckConfigurationExec';
import { HealthCheckConfigurationHttpGet } from './HealthCheckConfigurationHttpGet';
import { HealthCheckConfigurationTcpSocket } from './HealthCheckConfigurationTcpSocket';


export class HealthCheckConfigurationStartupProbe {
    public periodSeconds?: number;
    public initialDelaySeconds?: number;
    public timeoutSeconds?: number;
    public successThreshold?: number;
    public failureThreshold?: number;
    public httpGet?: HealthCheckConfigurationHttpGet;
    public tcpSocket?: HealthCheckConfigurationTcpSocket;
    public exec?: HealthCheckConfigurationExec;
    public constructor() { 
    }
    public withPeriodSeconds(periodSeconds: number): HealthCheckConfigurationStartupProbe {
        this['periodSeconds'] = periodSeconds;
        return this;
    }
    public withInitialDelaySeconds(initialDelaySeconds: number): HealthCheckConfigurationStartupProbe {
        this['initialDelaySeconds'] = initialDelaySeconds;
        return this;
    }
    public withTimeoutSeconds(timeoutSeconds: number): HealthCheckConfigurationStartupProbe {
        this['timeoutSeconds'] = timeoutSeconds;
        return this;
    }
    public withSuccessThreshold(successThreshold: number): HealthCheckConfigurationStartupProbe {
        this['successThreshold'] = successThreshold;
        return this;
    }
    public withFailureThreshold(failureThreshold: number): HealthCheckConfigurationStartupProbe {
        this['failureThreshold'] = failureThreshold;
        return this;
    }
    public withHttpGet(httpGet: HealthCheckConfigurationHttpGet): HealthCheckConfigurationStartupProbe {
        this['httpGet'] = httpGet;
        return this;
    }
    public withTcpSocket(tcpSocket: HealthCheckConfigurationTcpSocket): HealthCheckConfigurationStartupProbe {
        this['tcpSocket'] = tcpSocket;
        return this;
    }
    public withExec(exec: HealthCheckConfigurationExec): HealthCheckConfigurationStartupProbe {
        this['exec'] = exec;
        return this;
    }
}