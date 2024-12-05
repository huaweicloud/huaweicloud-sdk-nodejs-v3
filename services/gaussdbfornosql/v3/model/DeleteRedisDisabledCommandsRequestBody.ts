import { RedisDisabledCommandsDetail } from './RedisDisabledCommandsDetail';


export class DeleteRedisDisabledCommandsRequestBody {
    private 'disabled_type'?: DeleteRedisDisabledCommandsRequestBodyDisabledTypeEnum | string;
    public commands?: Array<string>;
    public keys?: Array<RedisDisabledCommandsDetail>;
    public constructor(disabledType?: string) { 
        this['disabled_type'] = disabledType;
    }
    public withDisabledType(disabledType: DeleteRedisDisabledCommandsRequestBodyDisabledTypeEnum | string): DeleteRedisDisabledCommandsRequestBody {
        this['disabled_type'] = disabledType;
        return this;
    }
    public set disabledType(disabledType: DeleteRedisDisabledCommandsRequestBodyDisabledTypeEnum | string  | undefined) {
        this['disabled_type'] = disabledType;
    }
    public get disabledType(): DeleteRedisDisabledCommandsRequestBodyDisabledTypeEnum | string | undefined {
        return this['disabled_type'];
    }
    public withCommands(commands: Array<string>): DeleteRedisDisabledCommandsRequestBody {
        this['commands'] = commands;
        return this;
    }
    public withKeys(keys: Array<RedisDisabledCommandsDetail>): DeleteRedisDisabledCommandsRequestBody {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRedisDisabledCommandsRequestBodyDisabledTypeEnum {
    COMMAND = 'command',
    KEY = 'key'
}
