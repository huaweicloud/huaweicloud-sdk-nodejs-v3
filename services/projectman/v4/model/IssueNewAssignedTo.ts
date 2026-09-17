

export class IssueNewAssignedTo {
    public firstName?: string;
    public lastName?: string;
    public identifier?: string;
    private 'image_id'?: string;
    public assignedNickName?: string;
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withFirstName(firstName: string): IssueNewAssignedTo {
        this['firstName'] = firstName;
        return this;
    }
    public withLastName(lastName: string): IssueNewAssignedTo {
        this['lastName'] = lastName;
        return this;
    }
    public withIdentifier(identifier: string): IssueNewAssignedTo {
        this['identifier'] = identifier;
        return this;
    }
    public withImageId(imageId: string): IssueNewAssignedTo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAssignedNickName(assignedNickName: string): IssueNewAssignedTo {
        this['assignedNickName'] = assignedNickName;
        return this;
    }
    public withName(name: string): IssueNewAssignedTo {
        this['name'] = name;
        return this;
    }
    public withId(id: number): IssueNewAssignedTo {
        this['id'] = id;
        return this;
    }
}