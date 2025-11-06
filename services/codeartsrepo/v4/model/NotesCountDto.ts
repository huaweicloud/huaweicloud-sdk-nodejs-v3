

export class NotesCountDto {
    private 'notes_count'?: number;
    private 'unresolved_notes_count'?: number;
    private 'already_resolved_count'?: number;
    private 'need_resolved_count'?: number;
    public constructor() { 
    }
    public withNotesCount(notesCount: number): NotesCountDto {
        this['notes_count'] = notesCount;
        return this;
    }
    public set notesCount(notesCount: number  | undefined) {
        this['notes_count'] = notesCount;
    }
    public get notesCount(): number | undefined {
        return this['notes_count'];
    }
    public withUnresolvedNotesCount(unresolvedNotesCount: number): NotesCountDto {
        this['unresolved_notes_count'] = unresolvedNotesCount;
        return this;
    }
    public set unresolvedNotesCount(unresolvedNotesCount: number  | undefined) {
        this['unresolved_notes_count'] = unresolvedNotesCount;
    }
    public get unresolvedNotesCount(): number | undefined {
        return this['unresolved_notes_count'];
    }
    public withAlreadyResolvedCount(alreadyResolvedCount: number): NotesCountDto {
        this['already_resolved_count'] = alreadyResolvedCount;
        return this;
    }
    public set alreadyResolvedCount(alreadyResolvedCount: number  | undefined) {
        this['already_resolved_count'] = alreadyResolvedCount;
    }
    public get alreadyResolvedCount(): number | undefined {
        return this['already_resolved_count'];
    }
    public withNeedResolvedCount(needResolvedCount: number): NotesCountDto {
        this['need_resolved_count'] = needResolvedCount;
        return this;
    }
    public set needResolvedCount(needResolvedCount: number  | undefined) {
        this['need_resolved_count'] = needResolvedCount;
    }
    public get needResolvedCount(): number | undefined {
        return this['need_resolved_count'];
    }
}