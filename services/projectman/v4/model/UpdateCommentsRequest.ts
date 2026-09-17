

export class UpdateCommentsRequest {
    public id?: number;
    public notes?: string;
    public innerText?: string;
    public projectUUId?: string;
    public type?: string;
    public noteId?: number;
    public constructor(id?: number, notes?: string, projectUUId?: string, type?: string, noteId?: number) { 
        this['id'] = id;
        this['notes'] = notes;
        this['projectUUId'] = projectUUId;
        this['type'] = type;
        this['noteId'] = noteId;
    }
    public withId(id: number): UpdateCommentsRequest {
        this['id'] = id;
        return this;
    }
    public withNotes(notes: string): UpdateCommentsRequest {
        this['notes'] = notes;
        return this;
    }
    public withInnerText(innerText: string): UpdateCommentsRequest {
        this['innerText'] = innerText;
        return this;
    }
    public withProjectUUId(projectUUId: string): UpdateCommentsRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withType(type: string): UpdateCommentsRequest {
        this['type'] = type;
        return this;
    }
    public withNoteId(noteId: number): UpdateCommentsRequest {
        this['noteId'] = noteId;
        return this;
    }
}