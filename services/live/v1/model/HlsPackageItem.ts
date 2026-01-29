import { Encryption } from './Encryption';
import { HttpHeader } from './HttpHeader';
import { ManifestSelection } from './ManifestSelection';
import { PackageRequestArgs } from './PackageRequestArgs';
import { StreamSelectionItem } from './StreamSelectionItem';


export class HlsPackageItem {
    public id?: string;
    public url?: string;
    private 'stream_selection'?: Array<StreamSelectionItem>;
    private 'hls_version'?: string;
    private 'segment_duration_seconds'?: number;
    private 'playlist_window_seconds'?: number;
    public encryption?: Encryption;
    public ads?: object;
    private 'ext_args'?: object;
    private 'request_args'?: PackageRequestArgs;
    private 'ad_marker'?: Array<string>;
    private 'enable_access'?: boolean;
    private 'allow_all_ip_access'?: boolean;
    private 'ip_whitelist'?: string;
    private 'cdn_identifier_header'?: HttpHeader;
    private 'origin_domain_master'?: string;
    private 'origin_domain_slave'?: string;
    private 'manifest_name'?: string;
    private 'slave_url'?: string;
    private 'manifest_selection'?: ManifestSelection;
    public constructor(segmentDurationSeconds?: number) { 
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public withId(id: string): HlsPackageItem {
        this['id'] = id;
        return this;
    }
    public withUrl(url: string): HlsPackageItem {
        this['url'] = url;
        return this;
    }
    public withStreamSelection(streamSelection: Array<StreamSelectionItem>): HlsPackageItem {
        this['stream_selection'] = streamSelection;
        return this;
    }
    public set streamSelection(streamSelection: Array<StreamSelectionItem>  | undefined) {
        this['stream_selection'] = streamSelection;
    }
    public get streamSelection(): Array<StreamSelectionItem> | undefined {
        return this['stream_selection'];
    }
    public withHlsVersion(hlsVersion: string): HlsPackageItem {
        this['hls_version'] = hlsVersion;
        return this;
    }
    public set hlsVersion(hlsVersion: string  | undefined) {
        this['hls_version'] = hlsVersion;
    }
    public get hlsVersion(): string | undefined {
        return this['hls_version'];
    }
    public withSegmentDurationSeconds(segmentDurationSeconds: number): HlsPackageItem {
        this['segment_duration_seconds'] = segmentDurationSeconds;
        return this;
    }
    public set segmentDurationSeconds(segmentDurationSeconds: number  | undefined) {
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public get segmentDurationSeconds(): number | undefined {
        return this['segment_duration_seconds'];
    }
    public withPlaylistWindowSeconds(playlistWindowSeconds: number): HlsPackageItem {
        this['playlist_window_seconds'] = playlistWindowSeconds;
        return this;
    }
    public set playlistWindowSeconds(playlistWindowSeconds: number  | undefined) {
        this['playlist_window_seconds'] = playlistWindowSeconds;
    }
    public get playlistWindowSeconds(): number | undefined {
        return this['playlist_window_seconds'];
    }
    public withEncryption(encryption: Encryption): HlsPackageItem {
        this['encryption'] = encryption;
        return this;
    }
    public withAds(ads: object): HlsPackageItem {
        this['ads'] = ads;
        return this;
    }
    public withExtArgs(extArgs: object): HlsPackageItem {
        this['ext_args'] = extArgs;
        return this;
    }
    public set extArgs(extArgs: object  | undefined) {
        this['ext_args'] = extArgs;
    }
    public get extArgs(): object | undefined {
        return this['ext_args'];
    }
    public withRequestArgs(requestArgs: PackageRequestArgs): HlsPackageItem {
        this['request_args'] = requestArgs;
        return this;
    }
    public set requestArgs(requestArgs: PackageRequestArgs  | undefined) {
        this['request_args'] = requestArgs;
    }
    public get requestArgs(): PackageRequestArgs | undefined {
        return this['request_args'];
    }
    public withAdMarker(adMarker: Array<string>): HlsPackageItem {
        this['ad_marker'] = adMarker;
        return this;
    }
    public set adMarker(adMarker: Array<string>  | undefined) {
        this['ad_marker'] = adMarker;
    }
    public get adMarker(): Array<string> | undefined {
        return this['ad_marker'];
    }
    public withEnableAccess(enableAccess: boolean): HlsPackageItem {
        this['enable_access'] = enableAccess;
        return this;
    }
    public set enableAccess(enableAccess: boolean  | undefined) {
        this['enable_access'] = enableAccess;
    }
    public get enableAccess(): boolean | undefined {
        return this['enable_access'];
    }
    public withAllowAllIpAccess(allowAllIpAccess: boolean): HlsPackageItem {
        this['allow_all_ip_access'] = allowAllIpAccess;
        return this;
    }
    public set allowAllIpAccess(allowAllIpAccess: boolean  | undefined) {
        this['allow_all_ip_access'] = allowAllIpAccess;
    }
    public get allowAllIpAccess(): boolean | undefined {
        return this['allow_all_ip_access'];
    }
    public withIpWhitelist(ipWhitelist: string): HlsPackageItem {
        this['ip_whitelist'] = ipWhitelist;
        return this;
    }
    public set ipWhitelist(ipWhitelist: string  | undefined) {
        this['ip_whitelist'] = ipWhitelist;
    }
    public get ipWhitelist(): string | undefined {
        return this['ip_whitelist'];
    }
    public withCdnIdentifierHeader(cdnIdentifierHeader: HttpHeader): HlsPackageItem {
        this['cdn_identifier_header'] = cdnIdentifierHeader;
        return this;
    }
    public set cdnIdentifierHeader(cdnIdentifierHeader: HttpHeader  | undefined) {
        this['cdn_identifier_header'] = cdnIdentifierHeader;
    }
    public get cdnIdentifierHeader(): HttpHeader | undefined {
        return this['cdn_identifier_header'];
    }
    public withOriginDomainMaster(originDomainMaster: string): HlsPackageItem {
        this['origin_domain_master'] = originDomainMaster;
        return this;
    }
    public set originDomainMaster(originDomainMaster: string  | undefined) {
        this['origin_domain_master'] = originDomainMaster;
    }
    public get originDomainMaster(): string | undefined {
        return this['origin_domain_master'];
    }
    public withOriginDomainSlave(originDomainSlave: string): HlsPackageItem {
        this['origin_domain_slave'] = originDomainSlave;
        return this;
    }
    public set originDomainSlave(originDomainSlave: string  | undefined) {
        this['origin_domain_slave'] = originDomainSlave;
    }
    public get originDomainSlave(): string | undefined {
        return this['origin_domain_slave'];
    }
    public withManifestName(manifestName: string): HlsPackageItem {
        this['manifest_name'] = manifestName;
        return this;
    }
    public set manifestName(manifestName: string  | undefined) {
        this['manifest_name'] = manifestName;
    }
    public get manifestName(): string | undefined {
        return this['manifest_name'];
    }
    public withSlaveUrl(slaveUrl: string): HlsPackageItem {
        this['slave_url'] = slaveUrl;
        return this;
    }
    public set slaveUrl(slaveUrl: string  | undefined) {
        this['slave_url'] = slaveUrl;
    }
    public get slaveUrl(): string | undefined {
        return this['slave_url'];
    }
    public withManifestSelection(manifestSelection: ManifestSelection): HlsPackageItem {
        this['manifest_selection'] = manifestSelection;
        return this;
    }
    public set manifestSelection(manifestSelection: ManifestSelection  | undefined) {
        this['manifest_selection'] = manifestSelection;
    }
    public get manifestSelection(): ManifestSelection | undefined {
        return this['manifest_selection'];
    }
}