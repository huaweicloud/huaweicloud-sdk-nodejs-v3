import { HealthCheckConfigurationExec } from './HealthCheckConfigurationExec';
import { HealthCheckConfigurationHttpGet } from './HealthCheckConfigurationHttpGet';
import { HealthCheckConfigurationTcpSocket } from './HealthCheckConfigurationTcpSocket';


export class HealthCheckConfigurationReadinessProbe {
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
    public withPeriodSeconds(periodSeconds: number): HealthCheckConfigurationReadinessProbe {
        this['periodSeconds'] = periodSeconds;
        return this;
    }
    public withInitialDelaySeconds(initialDelaySeconds: number): HealthCheckConfigurationReadinessProbe {
        this['initialDelaySeconds'] = initialDelaySeconds;
        return this;
    }
    public withTimeoutSeconds(timeoutSeconds: number): HealthCheckConfigurationReadinessProbe {
        this['timeoutSeconds'] = timeoutSeconds;
        return this;
    }
    public withSuccessThreshold(successThreshold: number): HealthCheckConfigurationReadinessProbe {
        this['successThreshold'] = successThreshold;
        return this;
    }
    public withFailureThreshold(failureThreshold: number): HealthCheckConfigurationReadinessProbe {
        this['failureThreshold'] = failureThreshold;
        return this;
    }
    public withHttpGet(httpGet: HealthCheckConfigurationHttpGet): HealthCheckConfigurationReadinessProbe {
        this['httpGet'] = httpGet;
        return this;
    }
    public withTcpSocket(tcpSocket: HealthCheckConfigurationTcpSocket): HealthCheckConfigurationReadinessProbe {
        this['tcpSocket'] = tcpSocket;
        return this;
    }
    public withExec(exec: HealthCheckConfigurationExec): HealthCheckConfigurationReadinessProbe {
        this['exec'] = exec;
        return this;
    }
}