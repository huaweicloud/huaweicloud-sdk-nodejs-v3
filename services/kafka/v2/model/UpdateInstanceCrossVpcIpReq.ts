

export class UpdateInstanceCrossVpcIpReq {
    private 'advertised_ip_contents'?: { [key: string]: string; };
    public constructor(advertisedIpContents?: { [key: string]: string; }) { 
        this['advertised_ip_contents'] = advertisedIpContents;
    }
    public withAdvertisedIpContents(advertisedIpContents: { [key: string]: string; }): UpdateInstanceCrossVpcIpReq {
        this['advertised_ip_contents'] = advertisedIpContents;
        return this;
    }
    public set advertisedIpContents(advertisedIpContents: { [key: string]: string; }  | undefined) {
        this['advertised_ip_contents'] = advertisedIpContents;
    }
    public get advertisedIpContents(): { [key: string]: string; } | undefined {
        return this['advertised_ip_contents'];
    }
}