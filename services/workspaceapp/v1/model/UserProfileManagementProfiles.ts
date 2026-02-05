

export class UserProfileManagementProfiles {
    private 'vhd_write_back'?: string;
    public constructor() { 
    }
    public withVhdWriteBack(vhdWriteBack: string): UserProfileManagementProfiles {
        this['vhd_write_back'] = vhdWriteBack;
        return this;
    }
    public set vhdWriteBack(vhdWriteBack: string  | undefined) {
        this['vhd_write_back'] = vhdWriteBack;
    }
    public get vhdWriteBack(): string | undefined {
        return this['vhd_write_back'];
    }
}