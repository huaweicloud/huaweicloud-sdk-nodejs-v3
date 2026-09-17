

export class AddCommentsRequest {
    public id?: string;
    public notes?: string;
    public innerText?: string;
    public projectUUId?: string;
    public type?: string;
    public constructor(id?: string, notes?: string) { 
        this['id'] = id;
        this['notes'] = notes;
    }
    public withId(id: string): AddCommentsRequest {
        this['id'] = id;
        return this;
    }
    public withNotes(notes: string): AddCommentsRequest {
        this['notes'] = notes;
        return this;
    }
    public withInnerText(innerText: string): AddCommentsRequest {
        this['innerText'] = innerText;
        return this;
    }
    public withProjectUUId(projectUUId: string): AddCommentsRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withType(type: string): AddCommentsRequest {
        this['type'] = type;
        return this;
    }
}