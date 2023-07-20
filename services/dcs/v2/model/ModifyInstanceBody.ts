import { BackupPolicy } from './BackupPolicy';
import { RenameCommandResp } from './RenameCommandResp';


export class ModifyInstanceBody {
    public name?: string;
    public description?: string;
    public port?: number;
    private 'rename_commands'?: RenameCommandResp;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'security_group_id'?: string;
    private 'instance_backup_policy'?: BackupPolicy;
    public constructor() { 
    }
    public withName(name: string): ModifyInstanceBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyInstanceBody {
        this['description'] = description;
        return this;
    }
    public withPort(port: number): ModifyInstanceBody {
        this['port'] = port;
        return this;
    }
    public withRenameCommands(renameCommands: RenameCommandResp): ModifyInstanceBody {
        this['rename_commands'] = renameCommands;
        return this;
    }
    public set renameCommands(renameCommands: RenameCommandResp  | undefined) {
        this['rename_commands'] = renameCommands;
    }
    public get renameCommands(): RenameCommandResp | undefined {
        return this['rename_commands'];
    }
    public withMaintainBegin(maintainBegin: string): ModifyInstanceBody {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): ModifyInstanceBody {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withSecurityGroupId(securityGroupId: string): ModifyInstanceBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withInstanceBackupPolicy(instanceBackupPolicy: BackupPolicy): ModifyInstanceBody {
        this['instance_backup_policy'] = instanceBackupPolicy;
        return this;
    }
    public set instanceBackupPolicy(instanceBackupPolicy: BackupPolicy  | undefined) {
        this['instance_backup_policy'] = instanceBackupPolicy;
    }
    public get instanceBackupPolicy(): BackupPolicy | undefined {
        return this['instance_backup_policy'];
    }
}