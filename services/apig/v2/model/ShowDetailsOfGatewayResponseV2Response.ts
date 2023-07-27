import { ResponseInfoResp } from './ResponseInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfGatewayResponseV2Response extends SdkResponse {
    public name?: string;
    public responses?: { [key: string]: ResponseInfoResp; };
    public id?: string;
    private 'default'?: boolean;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowDetailsOfGatewayResponseV2Response {
        this['name'] = name;
        return this;
    }
    public withResponses(responses: { [key: string]: ResponseInfoResp; }): ShowDetailsOfGatewayResponseV2Response {
        this['responses'] = responses;
        return this;
    }
    public withId(id: string): ShowDetailsOfGatewayResponseV2Response {
        this['id'] = id;
        return this;
    }
    public withDefault(_default: boolean): ShowDetailsOfGatewayResponseV2Response {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withCreateTime(createTime: Date): ShowDetailsOfGatewayResponseV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfGatewayResponseV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}