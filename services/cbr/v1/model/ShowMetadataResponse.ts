
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetadataResponse extends SdkResponse {
    private 'backup_id'?: string | undefined;
    public backups?: string;
    public flavor?: string;
    public floatingips?: Array<string>;
    private 'interface'?: string | undefined;
    public ports?: Array<string>;
    public server?: string;
    public volumes?: Array<string>;
    public constructor() { 
        super();
    }
    public withBackupId(backupId: string): ShowMetadataResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBackups(backups: string): ShowMetadataResponse {
        this['backups'] = backups;
        return this;
    }
    public withFlavor(flavor: string): ShowMetadataResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withFloatingips(floatingips: Array<string>): ShowMetadataResponse {
        this['floatingips'] = floatingips;
        return this;
    }
    public withInterface(_interface: string): ShowMetadataResponse {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: string | undefined) {
        this['interface'] = _interface;
    }
    public get _interface() {
        return this['interface'];
    }
    public withPorts(ports: Array<string>): ShowMetadataResponse {
        this['ports'] = ports;
        return this;
    }
    public withServer(server: string): ShowMetadataResponse {
        this['server'] = server;
        return this;
    }
    public withVolumes(volumes: Array<string>): ShowMetadataResponse {
        this['volumes'] = volumes;
        return this;
    }
}