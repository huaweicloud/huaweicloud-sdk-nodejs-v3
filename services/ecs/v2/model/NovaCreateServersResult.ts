import { NovaLink } from './NovaLink';
import { NovaServerSecurityGroup } from './NovaServerSecurityGroup';


export class NovaCreateServersResult {
    public id?: string;
    public links?: Array<NovaLink>;
    private 'security_groups'?: Array<NovaServerSecurityGroup>;
    private 'OS-DCF:diskConfig'?: NovaCreateServersResultOSDCFDiskConfigEnum | string;
    private 'reservation_id'?: string;
    public adminPass?: string;
    public constructor(id?: string, links?: Array<NovaLink>, securityGroups?: Array<NovaServerSecurityGroup>, oSDCFDiskConfig?: string, adminPass?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['security_groups'] = securityGroups;
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        this['adminPass'] = adminPass;
    }
    public withId(id: string): NovaCreateServersResult {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaCreateServersResult {
        this['links'] = links;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<NovaServerSecurityGroup>): NovaCreateServersResult {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NovaServerSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<NovaServerSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersResultOSDCFDiskConfigEnum | string): NovaCreateServersResult {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersResultOSDCFDiskConfigEnum | string  | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig(): NovaCreateServersResultOSDCFDiskConfigEnum | string | undefined {
        return this['OS-DCF:diskConfig'];
    }
    public withReservationId(reservationId: string): NovaCreateServersResult {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string  | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId(): string | undefined {
        return this['reservation_id'];
    }
    public withAdminPass(adminPass: string): NovaCreateServersResult {
        this['adminPass'] = adminPass;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaCreateServersResultOSDCFDiskConfigEnum {
    MANUAL = 'MANUAL',
    AUTO = 'AUTO'
}
