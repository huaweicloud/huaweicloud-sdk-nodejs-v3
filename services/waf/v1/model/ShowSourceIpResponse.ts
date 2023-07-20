import { IpsItem } from './IpsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSourceIpResponse extends SdkResponse {
    private 'source_ip'?: Array<IpsItem>;
    private 'last_modify'?: number;
    public constructor() { 
        super();
    }
    public withSourceIp(sourceIp: Array<IpsItem>): ShowSourceIpResponse {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: Array<IpsItem>  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): Array<IpsItem> | undefined {
        return this['source_ip'];
    }
    public withLastModify(lastModify: number): ShowSourceIpResponse {
        this['last_modify'] = lastModify;
        return this;
    }
    public set lastModify(lastModify: number  | undefined) {
        this['last_modify'] = lastModify;
    }
    public get lastModify(): number | undefined {
        return this['last_modify'];
    }
}