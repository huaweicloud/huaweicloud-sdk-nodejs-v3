

export class MultiCloudClusterConfigInfo {
    public address?: string;
    private 'certificate_expiration_date'?: number;
    public constructor() { 
    }
    public withAddress(address: string): MultiCloudClusterConfigInfo {
        this['address'] = address;
        return this;
    }
    public withCertificateExpirationDate(certificateExpirationDate: number): MultiCloudClusterConfigInfo {
        this['certificate_expiration_date'] = certificateExpirationDate;
        return this;
    }
    public set certificateExpirationDate(certificateExpirationDate: number  | undefined) {
        this['certificate_expiration_date'] = certificateExpirationDate;
    }
    public get certificateExpirationDate(): number | undefined {
        return this['certificate_expiration_date'];
    }
}