import { Encryption } from './Encryption';
import { HttpHeader } from './HttpHeader';
import { PackageRequestArgs } from './PackageRequestArgs';
import { StreamSelectionItem } from './StreamSelectionItem';


export class MssPackageItem {
    public url?: string;
    private 'stream_selection'?: Array<StreamSelectionItem>;
    private 'segment_duration_seconds'?: number;
    private 'playlist_window_seconds'?: number;
    public encryption?: Encryption;
    private 'ext_args'?: object;
    private 'delay_segment'?: number;
    private 'request_args'?: PackageRequestArgs;
    private 'enable_access'?: boolean;
    private 'allow_all_ip_access'?: boolean;
    private 'ip_whitelist'?: string;
    private 'cdn_identifier_header'?: HttpHeader;
    private 'origin_domain_master'?: string;
    private 'origin_domain_slave'?: string;
    private 'manifest_name'?: string;
    private 'slave_url'?: string;
    public constructor(segmentDurationSeconds?: number) { 
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public withUrl(url: string): MssPackageItem {
        this['url'] = url;
        return this;
    }
    public withStreamSelection(streamSelection: Array<StreamSelectionItem>): MssPackageItem {
        this['stream_selection'] = streamSelection;
        return this;
    }
    public set streamSelection(streamSelection: Array<StreamSelectionItem>  | undefined) {
        this['stream_selection'] = streamSelection;
    }
    public get streamSelection(): Array<StreamSelectionItem> | undefined {
        return this['stream_selection'];
    }
    public withSegmentDurationSeconds(segmentDurationSeconds: number): MssPackageItem {
        this['segment_duration_seconds'] = segmentDurationSeconds;
        return this;
    }
    public set segmentDurationSeconds(segmentDurationSeconds: number  | undefined) {
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public get segmentDurationSeconds(): number | undefined {
        return this['segment_duration_seconds'];
    }
    public withPlaylistWindowSeconds(playlistWindowSeconds: number): MssPackageItem {
        this['playlist_window_seconds'] = playlistWindowSeconds;
        return this;
    }
    public set playlistWindowSeconds(playlistWindowSeconds: number  | undefined) {
        this['playlist_window_seconds'] = playlistWindowSeconds;
    }
    public get playlistWindowSeconds(): number | undefined {
        return this['playlist_window_seconds'];
    }
    public withEncryption(encryption: Encryption): MssPackageItem {
        this['encryption'] = encryption;
        return this;
    }
    public withExtArgs(extArgs: object): MssPackageItem {
        this['ext_args'] = extArgs;
        return this;
    }
    public set extArgs(extArgs: object  | undefined) {
        this['ext_args'] = extArgs;
    }
    public get extArgs(): object | undefined {
        return this['ext_args'];
    }
    public withDelaySegment(delaySegment: number): MssPackageItem {
        this['delay_segment'] = delaySegment;
        return this;
    }
    public set delaySegment(delaySegment: number  | undefined) {
        this['delay_segment'] = delaySegment;
    }
    public get delaySegment(): number | undefined {
        return this['delay_segment'];
    }
    public withRequestArgs(requestArgs: PackageRequestArgs): MssPackageItem {
        this['request_args'] = requestArgs;
        return this;
    }
    public set requestArgs(requestArgs: PackageRequestArgs  | undefined) {
        this['request_args'] = requestArgs;
    }
    public get requestArgs(): PackageRequestArgs | undefined {
        return this['request_args'];
    }
    public withEnableAccess(enableAccess: boolean): MssPackageItem {
        this['enable_access'] = enableAccess;
        return this;
    }
    public set enableAccess(enableAccess: boolean  | undefined) {
        this['enable_access'] = enableAccess;
    }
    public get enableAccess(): boolean | undefined {
        return this['enable_access'];
    }
    public withAllowAllIpAccess(allowAllIpAccess: boolean): MssPackageItem {
        this['allow_all_ip_access'] = allowAllIpAccess;
        return this;
    }
    public set allowAllIpAccess(allowAllIpAccess: boolean  | undefined) {
        this['allow_all_ip_access'] = allowAllIpAccess;
    }
    public get allowAllIpAccess(): boolean | undefined {
        return this['allow_all_ip_access'];
    }
    public withIpWhitelist(ipWhitelist: string): MssPackageItem {
        this['ip_whitelist'] = ipWhitelist;
        return this;
    }
    public set ipWhitelist(ipWhitelist: string  | undefined) {
        this['ip_whitelist'] = ipWhitelist;
    }
    public get ipWhitelist(): string | undefined {
        return this['ip_whitelist'];
    }
    public withCdnIdentifierHeader(cdnIdentifierHeader: HttpHeader): MssPackageItem {
        this['cdn_identifier_header'] = cdnIdentifierHeader;
        return this;
    }
    public set cdnIdentifierHeader(cdnIdentifierHeader: HttpHeader  | undefined) {
        this['cdn_identifier_header'] = cdnIdentifierHeader;
    }
    public get cdnIdentifierHeader(): HttpHeader | undefined {
        return this['cdn_identifier_header'];
    }
    public withOriginDomainMaster(originDomainMaster: string): MssPackageItem {
        this['origin_domain_master'] = originDomainMaster;
        return this;
    }
    public set originDomainMaster(originDomainMaster: string  | undefined) {
        this['origin_domain_master'] = originDomainMaster;
    }
    public get originDomainMaster(): string | undefined {
        return this['origin_domain_master'];
    }
    public withOriginDomainSlave(originDomainSlave: string): MssPackageItem {
        this['origin_domain_slave'] = originDomainSlave;
        return this;
    }
    public set originDomainSlave(originDomainSlave: string  | undefined) {
        this['origin_domain_slave'] = originDomainSlave;
    }
    public get originDomainSlave(): string | undefined {
        return this['origin_domain_slave'];
    }
    public withManifestName(manifestName: string): MssPackageItem {
        this['manifest_name'] = manifestName;
        return this;
    }
    public set manifestName(manifestName: string  | undefined) {
        this['manifest_name'] = manifestName;
    }
    public get manifestName(): string | undefined {
        return this['manifest_name'];
    }
    public withSlaveUrl(slaveUrl: string): MssPackageItem {
        this['slave_url'] = slaveUrl;
        return this;
    }
    public set slaveUrl(slaveUrl: string  | undefined) {
        this['slave_url'] = slaveUrl;
    }
    public get slaveUrl(): string | undefined {
        return this['slave_url'];
    }
}