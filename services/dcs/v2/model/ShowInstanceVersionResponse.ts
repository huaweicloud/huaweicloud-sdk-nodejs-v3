
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceVersionResponse extends SdkResponse {
    private 'engine_minor_version'?: string;
    private 'latest_engine_minor_version'?: string;
    private 'proxy_minor_version'?: string;
    private 'latest_proxy_minor_version'?: string;
    private 'engine_minor_version_upgradable'?: boolean;
    private 'proxy_minor_version_upgradable'?: boolean;
    public constructor() { 
        super();
    }
    public withEngineMinorVersion(engineMinorVersion: string): ShowInstanceVersionResponse {
        this['engine_minor_version'] = engineMinorVersion;
        return this;
    }
    public set engineMinorVersion(engineMinorVersion: string  | undefined) {
        this['engine_minor_version'] = engineMinorVersion;
    }
    public get engineMinorVersion(): string | undefined {
        return this['engine_minor_version'];
    }
    public withLatestEngineMinorVersion(latestEngineMinorVersion: string): ShowInstanceVersionResponse {
        this['latest_engine_minor_version'] = latestEngineMinorVersion;
        return this;
    }
    public set latestEngineMinorVersion(latestEngineMinorVersion: string  | undefined) {
        this['latest_engine_minor_version'] = latestEngineMinorVersion;
    }
    public get latestEngineMinorVersion(): string | undefined {
        return this['latest_engine_minor_version'];
    }
    public withProxyMinorVersion(proxyMinorVersion: string): ShowInstanceVersionResponse {
        this['proxy_minor_version'] = proxyMinorVersion;
        return this;
    }
    public set proxyMinorVersion(proxyMinorVersion: string  | undefined) {
        this['proxy_minor_version'] = proxyMinorVersion;
    }
    public get proxyMinorVersion(): string | undefined {
        return this['proxy_minor_version'];
    }
    public withLatestProxyMinorVersion(latestProxyMinorVersion: string): ShowInstanceVersionResponse {
        this['latest_proxy_minor_version'] = latestProxyMinorVersion;
        return this;
    }
    public set latestProxyMinorVersion(latestProxyMinorVersion: string  | undefined) {
        this['latest_proxy_minor_version'] = latestProxyMinorVersion;
    }
    public get latestProxyMinorVersion(): string | undefined {
        return this['latest_proxy_minor_version'];
    }
    public withEngineMinorVersionUpgradable(engineMinorVersionUpgradable: boolean): ShowInstanceVersionResponse {
        this['engine_minor_version_upgradable'] = engineMinorVersionUpgradable;
        return this;
    }
    public set engineMinorVersionUpgradable(engineMinorVersionUpgradable: boolean  | undefined) {
        this['engine_minor_version_upgradable'] = engineMinorVersionUpgradable;
    }
    public get engineMinorVersionUpgradable(): boolean | undefined {
        return this['engine_minor_version_upgradable'];
    }
    public withProxyMinorVersionUpgradable(proxyMinorVersionUpgradable: boolean): ShowInstanceVersionResponse {
        this['proxy_minor_version_upgradable'] = proxyMinorVersionUpgradable;
        return this;
    }
    public set proxyMinorVersionUpgradable(proxyMinorVersionUpgradable: boolean  | undefined) {
        this['proxy_minor_version_upgradable'] = proxyMinorVersionUpgradable;
    }
    public get proxyMinorVersionUpgradable(): boolean | undefined {
        return this['proxy_minor_version_upgradable'];
    }
}