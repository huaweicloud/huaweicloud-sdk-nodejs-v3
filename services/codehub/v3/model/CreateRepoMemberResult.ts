

export class CreateRepoMemberResult {
    public id?: string;
    public message?: string;
    public name?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): CreateRepoMemberResult {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): CreateRepoMemberResult {
        this['message'] = message;
        return this;
    }
    public withName(name: string): CreateRepoMemberResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateRepoMemberResult {
        this['status'] = status;
        return this;
    }
}