
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackUpInfoResponse extends SdkResponse {
    private 'is_additional_backup'?: boolean;
    private 'node_id'?: string;
    private 'node_ip'?: string;
    private 'node_role'?: string;
    private 'backup_period'?: string;
    public constructor() { 
        super();
    }
    public withIsAdditionalBackup(isAdditionalBackup: boolean): ShowBackUpInfoResponse {
        this['is_additional_backup'] = isAdditionalBackup;
        return this;
    }
    public set isAdditionalBackup(isAdditionalBackup: boolean  | undefined) {
        this['is_additional_backup'] = isAdditionalBackup;
    }
    public get isAdditionalBackup(): boolean | undefined {
        return this['is_additional_backup'];
    }
    public withNodeId(nodeId: string): ShowBackUpInfoResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeIp(nodeIp: string): ShowBackUpInfoResponse {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withNodeRole(nodeRole: string): ShowBackUpInfoResponse {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withBackupPeriod(backupPeriod: string): ShowBackUpInfoResponse {
        this['backup_period'] = backupPeriod;
        return this;
    }
    public set backupPeriod(backupPeriod: string  | undefined) {
        this['backup_period'] = backupPeriod;
    }
    public get backupPeriod(): string | undefined {
        return this['backup_period'];
    }
}