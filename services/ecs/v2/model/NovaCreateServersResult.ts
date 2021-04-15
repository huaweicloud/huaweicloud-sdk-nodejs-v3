import { NovaLink } from './NovaLink';
import { NovaServerSecurityGroup } from './NovaServerSecurityGroup';


export class NovaCreateServersResult {
    public id: string;
    public links: Array<NovaLink>;
    private 'security_groups': Array<NovaServerSecurityGroup> | undefined;
    private 'OS-DCF:diskConfig': NovaCreateServersResultOSDCFDiskConfigEnum | undefined;
    private 'reservation_id'?: string | undefined;
    public adminPass: string;
    public constructor(id?: any, links?: any, securityGroups?: any, oSDCFDiskConfig?: any, adminPass?: any) { 
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
    public set securityGroups(securityGroups: Array<NovaServerSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersResultOSDCFDiskConfigEnum): NovaCreateServersResult {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersResultOSDCFDiskConfigEnum | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig() {
        return this['OS-DCF:diskConfig'];
    }
    public withReservationId(reservationId: string): NovaCreateServersResult {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId() {
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
