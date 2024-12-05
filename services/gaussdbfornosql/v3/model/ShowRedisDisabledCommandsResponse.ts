import { RedisDisabledCommandsDetail } from './RedisDisabledCommandsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedisDisabledCommandsResponse extends SdkResponse {
    private 'total_count'?: string;
    private 'disabled_type'?: ShowRedisDisabledCommandsResponseDisabledTypeEnum | string;
    public commands?: Array<string>;
    public keys?: Array<RedisDisabledCommandsDetail>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: string): ShowRedisDisabledCommandsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
    public withDisabledType(disabledType: ShowRedisDisabledCommandsResponseDisabledTypeEnum | string): ShowRedisDisabledCommandsResponse {
        this['disabled_type'] = disabledType;
        return this;
    }
    public set disabledType(disabledType: ShowRedisDisabledCommandsResponseDisabledTypeEnum | string  | undefined) {
        this['disabled_type'] = disabledType;
    }
    public get disabledType(): ShowRedisDisabledCommandsResponseDisabledTypeEnum | string | undefined {
        return this['disabled_type'];
    }
    public withCommands(commands: Array<string>): ShowRedisDisabledCommandsResponse {
        this['commands'] = commands;
        return this;
    }
    public withKeys(keys: Array<RedisDisabledCommandsDetail>): ShowRedisDisabledCommandsResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRedisDisabledCommandsResponseDisabledTypeEnum {
    COMMAND = 'command',
    KEY = 'key'
}
