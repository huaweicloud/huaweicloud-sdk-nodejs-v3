

export class UserInGroup {
    public id?: string;
    private 'user_name'?: string;
    private 'user_email'?: string;
    private 'user_phone'?: string;
    private 'total_desktops'?: number;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): UserInGroup {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): UserInGroup {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserEmail(userEmail: string): UserInGroup {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withUserPhone(userPhone: string): UserInGroup {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withTotalDesktops(totalDesktops: number): UserInGroup {
        this['total_desktops'] = totalDesktops;
        return this;
    }
    public set totalDesktops(totalDesktops: number  | undefined) {
        this['total_desktops'] = totalDesktops;
    }
    public get totalDesktops(): number | undefined {
        return this['total_desktops'];
    }
    public withDescription(description: string): UserInGroup {
        this['description'] = description;
        return this;
    }
}