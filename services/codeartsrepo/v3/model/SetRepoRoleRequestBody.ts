

export class SetRepoRoleRequestBody {
    public role?: SetRepoRoleRequestBodyRoleEnum | number;
    public constructor(role?: number) { 
        this['role'] = role;
    }
    public withRole(role: SetRepoRoleRequestBodyRoleEnum | number): SetRepoRoleRequestBody {
        this['role'] = role;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetRepoRoleRequestBodyRoleEnum {
    NUMBER_20 = 20,
    NUMBER_30 = 30,
    NUMBER_40 = 40
}
