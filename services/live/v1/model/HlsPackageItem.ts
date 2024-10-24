import { Encryption } from './Encryption';
import { PackageRequestArgs } from './PackageRequestArgs';
import { StreamSelectionItem } from './StreamSelectionItem';


export class HlsPackageItem {
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
    public constructor(url?: string, segmentDurationSeconds?: number) { 
        this['url'] = url;
        this['segment_duration_seconds'] = segmentDurationSeconds;
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
}