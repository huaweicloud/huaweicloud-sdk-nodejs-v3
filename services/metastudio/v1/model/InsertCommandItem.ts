

export class InsertCommandItem {
    private 'command_id'?: string;
    public command?: InsertCommandItemCommandEnum | string;
    public params?: object;
    public source?: InsertCommandItemSourceEnum | string;
    public constructor() { 
    }
    public withCommandId(commandId: string): InsertCommandItem {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string  | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId(): string | undefined {
        return this['command_id'];
    }
    public withCommand(command: InsertCommandItemCommandEnum | string): InsertCommandItem {
        this['command'] = command;
        return this;
    }
    public withParams(params: object): InsertCommandItem {
        this['params'] = params;
        return this;
    }
    public withSource(source: InsertCommandItemSourceEnum | string): InsertCommandItem {
        this['source'] = source;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InsertCommandItemCommandEnum {
    INSERT_PLAY_SCRIPT = 'INSERT_PLAY_SCRIPT',
    INSERT_PLAY_AUDIO = 'INSERT_PLAY_AUDIO',
    REWRITE_INTERACTION_RULES = 'REWRITE_INTERACTION_RULES'
}
/**
    * @export
    * @enum {string}
    */
export enum InsertCommandItemSourceEnum {
    EXTERNAL = 'EXTERNAL',
    AUTO = 'AUTO'
}
