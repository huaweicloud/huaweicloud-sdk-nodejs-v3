import { Encryption } from './Encryption';
import { PackageRequestArgs } from './PackageRequestArgs';
import { StreamSelectionItem } from './StreamSelectionItem';


export class DashPackageItem {
    public url?: string;
    private 'stream_selection'?: Array<StreamSelectionItem>;
    private 'segment_duration_seconds'?: number;
    private 'playlist_window_seconds'?: number;
    public encryption?: Encryption;
    public ads?: object;
    private 'ext_args'?: object;
    private 'request_args'?: PackageRequestArgs;
    private 'ad_marker'?: DashPackageItemAdMarkerEnum | string;
    public constructor(url?: string, segmentDurationSeconds?: number) { 
        this['url'] = url;
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public withUrl(url: string): DashPackageItem {
        this['url'] = url;
        return this;
    }
    public withStreamSelection(streamSelection: Array<StreamSelectionItem>): DashPackageItem {
        this['stream_selection'] = streamSelection;
        return this;
    }
    public set streamSelection(streamSelection: Array<StreamSelectionItem>  | undefined) {
        this['stream_selection'] = streamSelection;
    }
    public get streamSelection(): Array<StreamSelectionItem> | undefined {
        return this['stream_selection'];
    }
    public withSegmentDurationSeconds(segmentDurationSeconds: number): DashPackageItem {
        this['segment_duration_seconds'] = segmentDurationSeconds;
        return this;
    }
    public set segmentDurationSeconds(segmentDurationSeconds: number  | undefined) {
        this['segment_duration_seconds'] = segmentDurationSeconds;
    }
    public get segmentDurationSeconds(): number | undefined {
        return this['segment_duration_seconds'];
    }
    public withPlaylistWindowSeconds(playlistWindowSeconds: number): DashPackageItem {
        this['playlist_window_seconds'] = playlistWindowSeconds;
        return this;
    }
    public set playlistWindowSeconds(playlistWindowSeconds: number  | undefined) {
        this['playlist_window_seconds'] = playlistWindowSeconds;
    }
    public get playlistWindowSeconds(): number | undefined {
        return this['playlist_window_seconds'];
    }
    public withEncryption(encryption: Encryption): DashPackageItem {
        this['encryption'] = encryption;
        return this;
    }
    public withAds(ads: object): DashPackageItem {
        this['ads'] = ads;
        return this;
    }
    public withExtArgs(extArgs: object): DashPackageItem {
        this['ext_args'] = extArgs;
        return this;
    }
    public set extArgs(extArgs: object  | undefined) {
        this['ext_args'] = extArgs;
    }
    public get extArgs(): object | undefined {
        return this['ext_args'];
    }
    public withRequestArgs(requestArgs: PackageRequestArgs): DashPackageItem {
        this['request_args'] = requestArgs;
        return this;
    }
    public set requestArgs(requestArgs: PackageRequestArgs  | undefined) {
        this['request_args'] = requestArgs;
    }
    public get requestArgs(): PackageRequestArgs | undefined {
        return this['request_args'];
    }
    public withAdMarker(adMarker: DashPackageItemAdMarkerEnum | string): DashPackageItem {
        this['ad_marker'] = adMarker;
        return this;
    }
    public set adMarker(adMarker: DashPackageItemAdMarkerEnum | string  | undefined) {
        this['ad_marker'] = adMarker;
    }
    public get adMarker(): DashPackageItemAdMarkerEnum | string | undefined {
        return this['ad_marker'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DashPackageItemAdMarkerEnum {
    XMLBIN = 'xml+bin',
    XML = 'xml'
}
