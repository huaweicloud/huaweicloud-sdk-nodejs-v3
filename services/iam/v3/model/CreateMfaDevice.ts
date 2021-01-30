

export class CreateMfaDevice {
    public name: string;
    private 'user_id': string | undefined;
    public constructor(name: any, userId: any) { 
        this['name'] = name;
        this['user_id'] = userId;
    }
    public withName(name: string): CreateMfaDevice {
        this['name'] = name;
        return this;
    }
    public withUserId(userId: string): CreateMfaDevice {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
}