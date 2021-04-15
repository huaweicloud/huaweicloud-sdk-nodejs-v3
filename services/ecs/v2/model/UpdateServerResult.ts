import { Link } from './Link';
import { SimpleFlavor } from './SimpleFlavor';
import { UpdateServerAddress } from './UpdateServerAddress';


export class UpdateServerResult {
    private 'tenant_id': string | undefined;
    public image: string;
    public accessIPv4: string;
    public accessIPv6: string;
    public metadata: { [key: string]: string; };
    public addresses: { [key: string]: Array<UpdateServerAddress>; };
    public created: string;
    public hostId: string;
    public flavor: SimpleFlavor;
    private 'OS-DCF:diskConfig'?: string | undefined;
    private 'user_id': string | undefined;
    public name: string;
    public progress: number;
    public links: Array<Link>;
    public id: string;
    public updated: string;
    public locked?: boolean;
    public description?: string;
    public tags: Array<string>;
    public status: string;
    private 'OS-EXT-SRV-ATTR:hostname': string | undefined;
    public constructor(tenantId?: any, image?: any, accessIPv4?: any, accessIPv6?: any, metadata?: any, addresses?: any, created?: any, hostId?: any, flavor?: any, userId?: any, name?: any, progress?: any, links?: any, id?: any, updated?: any, tags?: any, status?: any, oSEXTSRVATTRHostname?: any) { 
        this['tenant_id'] = tenantId;
        this['image'] = image;
        this['accessIPv4'] = accessIPv4;
        this['accessIPv6'] = accessIPv6;
        this['metadata'] = metadata;
        this['addresses'] = addresses;
        this['created'] = created;
        this['hostId'] = hostId;
        this['flavor'] = flavor;
        this['user_id'] = userId;
        this['name'] = name;
        this['progress'] = progress;
        this['links'] = links;
        this['id'] = id;
        this['updated'] = updated;
        this['tags'] = tags;
        this['status'] = status;
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public withTenantId(tenantId: string): UpdateServerResult {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withImage(image: string): UpdateServerResult {
        this['image'] = image;
        return this;
    }
    public withAccessIPv4(accessIPv4: string): UpdateServerResult {
        this['accessIPv4'] = accessIPv4;
        return this;
    }
    public withAccessIPv6(accessIPv6: string): UpdateServerResult {
        this['accessIPv6'] = accessIPv6;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): UpdateServerResult {
        this['metadata'] = metadata;
        return this;
    }
    public withAddresses(addresses: { [key: string]: Array<UpdateServerAddress>; }): UpdateServerResult {
        this['addresses'] = addresses;
        return this;
    }
    public withCreated(created: string): UpdateServerResult {
        this['created'] = created;
        return this;
    }
    public withHostId(hostId: string): UpdateServerResult {
        this['hostId'] = hostId;
        return this;
    }
    public withFlavor(flavor: SimpleFlavor): UpdateServerResult {
        this['flavor'] = flavor;
        return this;
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: string): UpdateServerResult {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: string | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig() {
        return this['OS-DCF:diskConfig'];
    }
    public withUserId(userId: string): UpdateServerResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withName(name: string): UpdateServerResult {
        this['name'] = name;
        return this;
    }
    public withProgress(progress: number): UpdateServerResult {
        this['progress'] = progress;
        return this;
    }
    public withLinks(links: Array<Link>): UpdateServerResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): UpdateServerResult {
        this['id'] = id;
        return this;
    }
    public withUpdated(updated: string): UpdateServerResult {
        this['updated'] = updated;
        return this;
    }
    public withLocked(locked: boolean): UpdateServerResult {
        this['locked'] = locked;
        return this;
    }
    public withDescription(description: string): UpdateServerResult {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): UpdateServerResult {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): UpdateServerResult {
        this['status'] = status;
        return this;
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): UpdateServerResult {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname() {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
}