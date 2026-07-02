import { SaInfo } from './SaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionIpsecSaResponse extends SdkResponse {
    private 'sa_infos'?: Array<SaInfo>;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withSaInfos(saInfos: Array<SaInfo>): ListConnectionIpsecSaResponse {
        this['sa_infos'] = saInfos;
        return this;
    }
    public set saInfos(saInfos: Array<SaInfo>  | undefined) {
        this['sa_infos'] = saInfos;
    }
    public get saInfos(): Array<SaInfo> | undefined {
        return this['sa_infos'];
    }
    public withRequestId(requestId: string): ListConnectionIpsecSaResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListConnectionIpsecSaResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}