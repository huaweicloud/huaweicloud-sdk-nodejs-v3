import { Link } from './Link';
import { SimpleFlavor } from './SimpleFlavor';
import { UpdateServerAddress } from './UpdateServerAddress';


export class UpdateServerResult {
    private 'tenant_id'?: string;
    public image?: string;
    public accessIPv4?: string;
    public accessIPv6?: string;
    public metadata?: { [key: string]: string; };
    public addresses?: { [key: string]: Array<UpdateServerAddress>; };
    public created?: string;
    public hostId?: string;
    public flavor?: SimpleFlavor;
    private 'OS-DCF:diskConfig'?: string;
    private 'user_id'?: string;
    public name?: string;
    public progress?: number;
    public links?: Array<Link>;
    public id?: string;
    public updated?: string;
    public locked?: boolean;
    public description?: string;
    public tags?: Array<string>;
    public status?: string;
    private 'OS-EXT-SRV-ATTR:user_data'?: string;
    private 'OS-EXT-SRV-ATTR:hostname'?: string;
    public constructor(tenantId?: string, image?: string, accessIPv4?: string, accessIPv6?: string, metadata?: { [key: string]: string; }, addresses?: { [key: string]: Array<UpdateServerAddress>; }, created?: string, hostId?: string, flavor?: SimpleFlavor, userId?: string, name?: string, progress?: number, links?: Array<Link>, id?: string, updated?: string, tags?: Array<string>, status?: string, oSEXTSRVATTRHostname?: string) { 
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
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
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
    public set oSDCFDiskConfig(oSDCFDiskConfig: string  | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig(): string | undefined {
        return this['OS-DCF:diskConfig'];
    }
    public withUserId(userId: string): UpdateServerResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
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
    public withOSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string): UpdateServerResult {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
        return this;
    }
    public set oSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string  | undefined) {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
    }
    public get oSEXTSRVATTRUserData(): string | undefined {
        return this['OS-EXT-SRV-ATTR:user_data'];
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): UpdateServerResult {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
}