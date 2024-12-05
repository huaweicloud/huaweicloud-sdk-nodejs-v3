import { RedisDisabledCommandsDetail } from './RedisDisabledCommandsDetail';


export class SaveRedisDisabledCommandsRequestBody {
    private 'disabled_type'?: SaveRedisDisabledCommandsRequestBodyDisabledTypeEnum | string;
    public commands?: Array<string>;
    public keys?: Array<RedisDisabledCommandsDetail>;
    public constructor(disabledType?: string) { 
        this['disabled_type'] = disabledType;
    }
    public withDisabledType(disabledType: SaveRedisDisabledCommandsRequestBodyDisabledTypeEnum | string): SaveRedisDisabledCommandsRequestBody {
        this['disabled_type'] = disabledType;
        return this;
    }
    public set disabledType(disabledType: SaveRedisDisabledCommandsRequestBodyDisabledTypeEnum | string  | undefined) {
        this['disabled_type'] = disabledType;
    }
    public get disabledType(): SaveRedisDisabledCommandsRequestBodyDisabledTypeEnum | string | undefined {
        return this['disabled_type'];
    }
    public withCommands(commands: Array<string>): SaveRedisDisabledCommandsRequestBody {
        this['commands'] = commands;
        return this;
    }
    public withKeys(keys: Array<RedisDisabledCommandsDetail>): SaveRedisDisabledCommandsRequestBody {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SaveRedisDisabledCommandsRequestBodyDisabledTypeEnum {
    COMMAND = 'command',
    KEY = 'key'
}
