

export class UpdateDeviceCertificate {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdateDeviceCertificate {
        this['status'] = status;
        return this;
    }
}