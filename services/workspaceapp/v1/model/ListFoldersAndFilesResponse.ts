import { FileInfo } from './FileInfo';
import { FolderInfo } from './FolderInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFoldersAndFilesResponse extends SdkResponse {
    public location?: string;
    public prefix?: string;
    public files?: Array<FileInfo>;
    public folders?: Array<FolderInfo>;
    public marker?: string;
    private 'next_marker'?: string;
    private 'max_keys'?: number;
    public constructor() { 
        super();
    }
    public withLocation(location: string): ListFoldersAndFilesResponse {
        this['location'] = location;
        return this;
    }
    public withPrefix(prefix: string): ListFoldersAndFilesResponse {
        this['prefix'] = prefix;
        return this;
    }
    public withFiles(files: Array<FileInfo>): ListFoldersAndFilesResponse {
        this['files'] = files;
        return this;
    }
    public withFolders(folders: Array<FolderInfo>): ListFoldersAndFilesResponse {
        this['folders'] = folders;
        return this;
    }
    public withMarker(marker: string): ListFoldersAndFilesResponse {
        this['marker'] = marker;
        return this;
    }
    public withNextMarker(nextMarker: string): ListFoldersAndFilesResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withMaxKeys(maxKeys: number): ListFoldersAndFilesResponse {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
}