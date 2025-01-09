

export class ModifyDesktopAttributesReqDesktop {
    private 'computer_name'?: string;
    private 'self_backup_management'?: string;
    public constructor() { 
    }
    public withComputerName(computerName: string): ModifyDesktopAttributesReqDesktop {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withSelfBackupManagement(selfBackupManagement: string): ModifyDesktopAttributesReqDesktop {
        this['self_backup_management'] = selfBackupManagement;
        return this;
    }
    public set selfBackupManagement(selfBackupManagement: string  | undefined) {
        this['self_backup_management'] = selfBackupManagement;
    }
    public get selfBackupManagement(): string | undefined {
        return this['self_backup_management'];
    }
}