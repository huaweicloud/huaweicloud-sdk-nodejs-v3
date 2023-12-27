
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFacialAnimationsDataResponse extends SdkResponse {
    private 'csv_file_download_url'?: string;
    public state?: ListFacialAnimationsDataResponseStateEnum | string;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withCsvFileDownloadUrl(csvFileDownloadUrl: string): ListFacialAnimationsDataResponse {
        this['csv_file_download_url'] = csvFileDownloadUrl;
        return this;
    }
    public set csvFileDownloadUrl(csvFileDownloadUrl: string  | undefined) {
        this['csv_file_download_url'] = csvFileDownloadUrl;
    }
    public get csvFileDownloadUrl(): string | undefined {
        return this['csv_file_download_url'];
    }
    public withState(state: ListFacialAnimationsDataResponseStateEnum | string): ListFacialAnimationsDataResponse {
        this['state'] = state;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListFacialAnimationsDataResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFacialAnimationsDataResponseStateEnum {
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
