import { Encryption } from './Encryption';
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
    public constructor(url?: string) { 
        this['url'] = url;
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
}