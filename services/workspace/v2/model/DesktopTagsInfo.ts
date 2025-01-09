import { Tag } from './Tag';


export class DesktopTagsInfo {
    private 'desktop_id'?: string;
    public tags?: Array<Tag>;
    public constructor(desktopId?: string, tags?: Array<Tag>) { 
        this['desktop_id'] = desktopId;
        this['tags'] = tags;
    }
    public withDesktopId(desktopId: string): DesktopTagsInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withTags(tags: Array<Tag>): DesktopTagsInfo {
        this['tags'] = tags;
        return this;
    }
}