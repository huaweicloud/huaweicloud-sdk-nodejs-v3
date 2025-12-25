

export class CreateNoteRequestBody {
    private 'war_room_id'?: string;
    public type?: string;
    public content?: string;
    private 'note_type'?: string;
    public constructor(type?: string, content?: string) { 
        this['type'] = type;
        this['content'] = content;
    }
    public withWarRoomId(warRoomId: string): CreateNoteRequestBody {
        this['war_room_id'] = warRoomId;
        return this;
    }
    public set warRoomId(warRoomId: string  | undefined) {
        this['war_room_id'] = warRoomId;
    }
    public get warRoomId(): string | undefined {
        return this['war_room_id'];
    }
    public withType(type: string): CreateNoteRequestBody {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): CreateNoteRequestBody {
        this['content'] = content;
        return this;
    }
    public withNoteType(noteType: string): CreateNoteRequestBody {
        this['note_type'] = noteType;
        return this;
    }
    public set noteType(noteType: string  | undefined) {
        this['note_type'] = noteType;
    }
    public get noteType(): string | undefined {
        return this['note_type'];
    }
}