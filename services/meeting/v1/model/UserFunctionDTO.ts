

export class UserFunctionDTO {
    public enableRoom?: boolean;
    public constructor() { 
    }
    public withEnableRoom(enableRoom: boolean): UserFunctionDTO {
        this['enableRoom'] = enableRoom;
        return this;
    }
}