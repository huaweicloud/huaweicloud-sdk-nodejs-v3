import { HealthCheckConfigurationExec } from './HealthCheckConfigurationExec';
import { HealthCheckConfigurationHttpGet } from './HealthCheckConfigurationHttpGet';
import { HealthCheckConfigurationTcpSocket } from './HealthCheckConfigurationTcpSocket';


export class HealthCheckConfigurationLivenessProbe {
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
    public withPeriodSeconds(periodSeconds: number): HealthCheckConfigurationLivenessProbe {
        this['periodSeconds'] = periodSeconds;
        return this;
    }
    public withInitialDelaySeconds(initialDelaySeconds: number): HealthCheckConfigurationLivenessProbe {
        this['initialDelaySeconds'] = initialDelaySeconds;
        return this;
    }
    public withTimeoutSeconds(timeoutSeconds: number): HealthCheckConfigurationLivenessProbe {
        this['timeoutSeconds'] = timeoutSeconds;
        return this;
    }
    public withSuccessThreshold(successThreshold: number): HealthCheckConfigurationLivenessProbe {
        this['successThreshold'] = successThreshold;
        return this;
    }
    public withFailureThreshold(failureThreshold: number): HealthCheckConfigurationLivenessProbe {
        this['failureThreshold'] = failureThreshold;
        return this;
    }
    public withHttpGet(httpGet: HealthCheckConfigurationHttpGet): HealthCheckConfigurationLivenessProbe {
        this['httpGet'] = httpGet;
        return this;
    }
    public withTcpSocket(tcpSocket: HealthCheckConfigurationTcpSocket): HealthCheckConfigurationLivenessProbe {
        this['tcpSocket'] = tcpSocket;
        return this;
    }
    public withExec(exec: HealthCheckConfigurationExec): HealthCheckConfigurationLivenessProbe {
        this['exec'] = exec;
        return this;
    }
}