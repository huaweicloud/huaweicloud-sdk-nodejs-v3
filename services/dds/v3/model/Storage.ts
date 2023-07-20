

export class Storage {
    public name?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor(name?: string, azStatus?: { [key: string]: string; }) { 
        this['name'] = name;
        this['az_status'] = azStatus;
    }
    public withName(name: string): Storage {
        this['name'] = name;
        return this;
    }
    public withAzStatus(azStatus: { [key: string]: string; }): Storage {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
}