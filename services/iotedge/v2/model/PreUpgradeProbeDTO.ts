import { UpgradeProbeTimeoutConfigDTO } from './UpgradeProbeTimeoutConfigDTO';


export class PreUpgradeProbeDTO {
    public port?: number;
    public path?: string;
    public interval?: number;
    public protocol?: string;
    private 'timeout_config'?: UpgradeProbeTimeoutConfigDTO;
    public constructor() { 
    }
    public withPort(port: number): PreUpgradeProbeDTO {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): PreUpgradeProbeDTO {
        this['path'] = path;
        return this;
    }
    public withInterval(interval: number): PreUpgradeProbeDTO {
        this['interval'] = interval;
        return this;
    }
    public withProtocol(protocol: string): PreUpgradeProbeDTO {
        this['protocol'] = protocol;
        return this;
    }
    public withTimeoutConfig(timeoutConfig: UpgradeProbeTimeoutConfigDTO): PreUpgradeProbeDTO {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: UpgradeProbeTimeoutConfigDTO  | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig(): UpgradeProbeTimeoutConfigDTO | undefined {
        return this['timeout_config'];
    }
}