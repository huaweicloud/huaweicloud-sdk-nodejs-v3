

export class IssueNewAuthor {
    public firstName?: string;
    public lastName?: string;
    public identifier?: string;
    private 'image_id'?: string;
    public authorNickName?: string;
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withFirstName(firstName: string): IssueNewAuthor {
        this['firstName'] = firstName;
        return this;
    }
    public withLastName(lastName: string): IssueNewAuthor {
        this['lastName'] = lastName;
        return this;
    }
    public withIdentifier(identifier: string): IssueNewAuthor {
        this['identifier'] = identifier;
        return this;
    }
    public withImageId(imageId: string): IssueNewAuthor {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAuthorNickName(authorNickName: string): IssueNewAuthor {
        this['authorNickName'] = authorNickName;
        return this;
    }
    public withName(name: string): IssueNewAuthor {
        this['name'] = name;
        return this;
    }
    public withId(id: number): IssueNewAuthor {
        this['id'] = id;
        return this;
    }
}