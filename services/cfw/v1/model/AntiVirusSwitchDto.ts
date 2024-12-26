

export class AntiVirusSwitchDto {
    private 'anti_virus_status'?: number;
    private 'object_id'?: string;
    public constructor() { 
    }
    public withAntiVirusStatus(antiVirusStatus: number): AntiVirusSwitchDto {
        this['anti_virus_status'] = antiVirusStatus;
        return this;
    }
    public set antiVirusStatus(antiVirusStatus: number  | undefined) {
        this['anti_virus_status'] = antiVirusStatus;
    }
    public get antiVirusStatus(): number | undefined {
        return this['anti_virus_status'];
    }
    public withObjectId(objectId: string): AntiVirusSwitchDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}