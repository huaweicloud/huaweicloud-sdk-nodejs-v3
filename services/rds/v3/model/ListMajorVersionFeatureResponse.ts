
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMajorVersionFeatureResponse extends SdkResponse {
    public version?: string;
    private 'support_upgrade_version'?: Array<string>;
    private 'support_recover_version'?: Array<string>;
    private 'support_file_stream'?: boolean;
    private 'support_tde'?: boolean;
    private 'support_always_on'?: boolean;
    private 'support_read_only'?: boolean;
    public constructor() { 
        super();
    }
    public withVersion(version: string): ListMajorVersionFeatureResponse {
        this['version'] = version;
        return this;
    }
    public withSupportUpgradeVersion(supportUpgradeVersion: Array<string>): ListMajorVersionFeatureResponse {
        this['support_upgrade_version'] = supportUpgradeVersion;
        return this;
    }
    public set supportUpgradeVersion(supportUpgradeVersion: Array<string>  | undefined) {
        this['support_upgrade_version'] = supportUpgradeVersion;
    }
    public get supportUpgradeVersion(): Array<string> | undefined {
        return this['support_upgrade_version'];
    }
    public withSupportRecoverVersion(supportRecoverVersion: Array<string>): ListMajorVersionFeatureResponse {
        this['support_recover_version'] = supportRecoverVersion;
        return this;
    }
    public set supportRecoverVersion(supportRecoverVersion: Array<string>  | undefined) {
        this['support_recover_version'] = supportRecoverVersion;
    }
    public get supportRecoverVersion(): Array<string> | undefined {
        return this['support_recover_version'];
    }
    public withSupportFileStream(supportFileStream: boolean): ListMajorVersionFeatureResponse {
        this['support_file_stream'] = supportFileStream;
        return this;
    }
    public set supportFileStream(supportFileStream: boolean  | undefined) {
        this['support_file_stream'] = supportFileStream;
    }
    public get supportFileStream(): boolean | undefined {
        return this['support_file_stream'];
    }
    public withSupportTde(supportTde: boolean): ListMajorVersionFeatureResponse {
        this['support_tde'] = supportTde;
        return this;
    }
    public set supportTde(supportTde: boolean  | undefined) {
        this['support_tde'] = supportTde;
    }
    public get supportTde(): boolean | undefined {
        return this['support_tde'];
    }
    public withSupportAlwaysOn(supportAlwaysOn: boolean): ListMajorVersionFeatureResponse {
        this['support_always_on'] = supportAlwaysOn;
        return this;
    }
    public set supportAlwaysOn(supportAlwaysOn: boolean  | undefined) {
        this['support_always_on'] = supportAlwaysOn;
    }
    public get supportAlwaysOn(): boolean | undefined {
        return this['support_always_on'];
    }
    public withSupportReadOnly(supportReadOnly: boolean): ListMajorVersionFeatureResponse {
        this['support_read_only'] = supportReadOnly;
        return this;
    }
    public set supportReadOnly(supportReadOnly: boolean  | undefined) {
        this['support_read_only'] = supportReadOnly;
    }
    public get supportReadOnly(): boolean | undefined {
        return this['support_read_only'];
    }
}