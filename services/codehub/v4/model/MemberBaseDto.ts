

export class MemberBaseDto {
    public id?: string;
    private 'iam_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): MemberBaseDto {
        this['id'] = id;
        return this;
    }
    public withIamId(iamId: string): MemberBaseDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withName(name: string): MemberBaseDto {
        this['name'] = name;
        return this;
    }
}