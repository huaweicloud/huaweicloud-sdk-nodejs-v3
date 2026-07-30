import { DownLoadFileInfoItem } from './DownLoadFileInfoItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadDdlLogsResponse extends SdkResponse {
    private 'download_files'?: Array<DownLoadFileInfoItem>;
    public constructor() { 
        super();
    }
    public withDownloadFiles(downloadFiles: Array<DownLoadFileInfoItem>): DownloadDdlLogsResponse {
        this['download_files'] = downloadFiles;
        return this;
    }
    public set downloadFiles(downloadFiles: Array<DownLoadFileInfoItem>  | undefined) {
        this['download_files'] = downloadFiles;
    }
    public get downloadFiles(): Array<DownLoadFileInfoItem> | undefined {
        return this['download_files'];
    }
}