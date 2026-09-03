

export class AdvancedConfig {
    public blockEnable?: string;
    public caseTimeout?: number;
    public enableCookie?: string;
    public headerDefault?: string;
    public httpTimeout?: number;
    public octopusImage?: string;
    public parallelNumber?: number;
    public proxyAuthName?: string;
    public proxyAuthPassword?: string;
    public proxyHostName?: string;
    public proxyPort?: string;
    public serialRun?: string;
    public taskStopTime?: Date;
    public taskTimeout?: number;
    public constructor() { 
    }
    public withBlockEnable(blockEnable: string): AdvancedConfig {
        this['blockEnable'] = blockEnable;
        return this;
    }
    public withCaseTimeout(caseTimeout: number): AdvancedConfig {
        this['caseTimeout'] = caseTimeout;
        return this;
    }
    public withEnableCookie(enableCookie: string): AdvancedConfig {
        this['enableCookie'] = enableCookie;
        return this;
    }
    public withHeaderDefault(headerDefault: string): AdvancedConfig {
        this['headerDefault'] = headerDefault;
        return this;
    }
    public withHttpTimeout(httpTimeout: number): AdvancedConfig {
        this['httpTimeout'] = httpTimeout;
        return this;
    }
    public withOctopusImage(octopusImage: string): AdvancedConfig {
        this['octopusImage'] = octopusImage;
        return this;
    }
    public withParallelNumber(parallelNumber: number): AdvancedConfig {
        this['parallelNumber'] = parallelNumber;
        return this;
    }
    public withProxyAuthName(proxyAuthName: string): AdvancedConfig {
        this['proxyAuthName'] = proxyAuthName;
        return this;
    }
    public withProxyAuthPassword(proxyAuthPassword: string): AdvancedConfig {
        this['proxyAuthPassword'] = proxyAuthPassword;
        return this;
    }
    public withProxyHostName(proxyHostName: string): AdvancedConfig {
        this['proxyHostName'] = proxyHostName;
        return this;
    }
    public withProxyPort(proxyPort: string): AdvancedConfig {
        this['proxyPort'] = proxyPort;
        return this;
    }
    public withSerialRun(serialRun: string): AdvancedConfig {
        this['serialRun'] = serialRun;
        return this;
    }
    public withTaskStopTime(taskStopTime: Date): AdvancedConfig {
        this['taskStopTime'] = taskStopTime;
        return this;
    }
    public withTaskTimeout(taskTimeout: number): AdvancedConfig {
        this['taskTimeout'] = taskTimeout;
        return this;
    }
}