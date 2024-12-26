

export class AntiVirusVO {
    private 'anti_virus_status'?: number;
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withAntiVirusStatus(antiVirusStatus: number): AntiVirusVO {
        this['anti_virus_status'] = antiVirusStatus;
        return this;
    }
    public set antiVirusStatus(antiVirusStatus: number  | undefined) {
        this['anti_virus_status'] = antiVirusStatus;
    }
    public get antiVirusStatus(): number | undefined {
        return this['anti_virus_status'];
    }
    public withId(id: string): AntiVirusVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AntiVirusVO {
        this['name'] = name;
        return this;
    }
}