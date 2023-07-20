
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DecryptDatakeyResponse extends SdkResponse {
    private 'data_key'?: string;
    private 'datakey_length'?: string;
    private 'datakey_dgst'?: string;
    public constructor() { 
        super();
    }
    public withDataKey(dataKey: string): DecryptDatakeyResponse {
        this['data_key'] = dataKey;
        return this;
    }
    public set dataKey(dataKey: string  | undefined) {
        this['data_key'] = dataKey;
    }
    public get dataKey(): string | undefined {
        return this['data_key'];
    }
    public withDatakeyLength(datakeyLength: string): DecryptDatakeyResponse {
        this['datakey_length'] = datakeyLength;
        return this;
    }
    public set datakeyLength(datakeyLength: string  | undefined) {
        this['datakey_length'] = datakeyLength;
    }
    public get datakeyLength(): string | undefined {
        return this['datakey_length'];
    }
    public withDatakeyDgst(datakeyDgst: string): DecryptDatakeyResponse {
        this['datakey_dgst'] = datakeyDgst;
        return this;
    }
    public set datakeyDgst(datakeyDgst: string  | undefined) {
        this['datakey_dgst'] = datakeyDgst;
    }
    public get datakeyDgst(): string | undefined {
        return this['datakey_dgst'];
    }
}