

export class EmailStatusInfo {
    public address?: string;
    private 'confirm_status'?: string;
    public constructor(address?: string, confirmStatus?: string) { 
        this['address'] = address;
        this['confirm_status'] = confirmStatus;
    }
    public withAddress(address: string): EmailStatusInfo {
        this['address'] = address;
        return this;
    }
    public withConfirmStatus(confirmStatus: string): EmailStatusInfo {
        this['confirm_status'] = confirmStatus;
        return this;
    }
    public set confirmStatus(confirmStatus: string  | undefined) {
        this['confirm_status'] = confirmStatus;
    }
    public get confirmStatus(): string | undefined {
        return this['confirm_status'];
    }
}