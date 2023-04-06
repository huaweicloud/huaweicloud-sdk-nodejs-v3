

export class ReconfigureExtDataSourceAction {
    public reboot?: boolean;
    public agency?: string;
    public constructor() { 
    }
    public withReboot(reboot: boolean): ReconfigureExtDataSourceAction {
        this['reboot'] = reboot;
        return this;
    }
    public withAgency(agency: string): ReconfigureExtDataSourceAction {
        this['agency'] = agency;
        return this;
    }
}