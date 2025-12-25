import { NotesDetailData } from './NotesDetailData';
import { NotesDetailUser } from './NotesDetailUser';


export class NotesDetail {
    private 'create_time'?: string;
    private 'update_time'?: string;
    public data?: NotesDetailData;
    public id?: string;
    private 'is_deleted'?: boolean;
    private 'marked_note'?: boolean;
    private 'note_type'?: string;
    private 'project_id'?: string;
    public type?: string;
    public user?: NotesDetailUser;
    private 'war_room_id'?: string;
    private 'workspace_id'?: string;
    public content?: object;
    public constructor() { 
    }
    public withCreateTime(createTime: string): NotesDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): NotesDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withData(data: NotesDetailData): NotesDetail {
        this['data'] = data;
        return this;
    }
    public withId(id: string): NotesDetail {
        this['id'] = id;
        return this;
    }
    public withIsDeleted(isDeleted: boolean): NotesDetail {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withMarkedNote(markedNote: boolean): NotesDetail {
        this['marked_note'] = markedNote;
        return this;
    }
    public set markedNote(markedNote: boolean  | undefined) {
        this['marked_note'] = markedNote;
    }
    public get markedNote(): boolean | undefined {
        return this['marked_note'];
    }
    public withNoteType(noteType: string): NotesDetail {
        this['note_type'] = noteType;
        return this;
    }
    public set noteType(noteType: string  | undefined) {
        this['note_type'] = noteType;
    }
    public get noteType(): string | undefined {
        return this['note_type'];
    }
    public withProjectId(projectId: string): NotesDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: string): NotesDetail {
        this['type'] = type;
        return this;
    }
    public withUser(user: NotesDetailUser): NotesDetail {
        this['user'] = user;
        return this;
    }
    public withWarRoomId(warRoomId: string): NotesDetail {
        this['war_room_id'] = warRoomId;
        return this;
    }
    public set warRoomId(warRoomId: string  | undefined) {
        this['war_room_id'] = warRoomId;
    }
    public get warRoomId(): string | undefined {
        return this['war_room_id'];
    }
    public withWorkspaceId(workspaceId: string): NotesDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withContent(content: object): NotesDetail {
        this['content'] = content;
        return this;
    }
}