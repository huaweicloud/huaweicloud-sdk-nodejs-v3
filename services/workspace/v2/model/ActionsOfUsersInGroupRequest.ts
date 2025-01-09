

export class ActionsOfUsersInGroupRequest {
    private 'user_ids'?: Array<string>;
    private 'op_type'?: ActionsOfUsersInGroupRequestOpTypeEnum | string;
    public constructor(userIds?: Array<string>, opType?: string) { 
        this['user_ids'] = userIds;
        this['op_type'] = opType;
    }
    public withUserIds(userIds: Array<string>): ActionsOfUsersInGroupRequest {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
    public withOpType(opType: ActionsOfUsersInGroupRequestOpTypeEnum | string): ActionsOfUsersInGroupRequest {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: ActionsOfUsersInGroupRequestOpTypeEnum | string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): ActionsOfUsersInGroupRequestOpTypeEnum | string | undefined {
        return this['op_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionsOfUsersInGroupRequestOpTypeEnum {
    ADD = 'ADD',
    DELETE = 'DELETE'
}
